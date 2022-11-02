import React, {Component} from 'react';
import { Card, Grid } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributrForm from '../../components/ContributeForm';

class CampaignShow extends Component{
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);

        // This is an obj and is accessed like an array
        const summary = await campaign.methods.getSummary().call();

        return{
            minContribution: summary[0],
            balance: summary[1],
            requestCount: summary[2],
            approversCount: summary[3],
            manager: summary[4]

        };
    }

    renderCards(){
        const{
            balance,
            manager,
            minContribution,
            requestCount,
            approversCount
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of Manager',
                description: 'The manager created this campaign and may create request to withdraw money',
                style: {overflowWrap: 'break-word'}
            },
            {
                header: minContribution,
                meta: 'Minimum Contribution (wei)',
                description: 'Must contribute at least this much wei to become a approver',
            },
            {
                header: requestCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money form the contract. Request must be approved by approvers'
            },
            {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign'
            },
            {
                header: web3.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend'
            }

        ];

        return <Card.Group items={items} />;
    }
    
    render(){
        return  (
            <Layout>
                <h3>CampaignShow</h3>
                <Grid>
                    <Grid.Column witdth={10}>
                        {this.renderCards()}
                    </Grid.Column>

                    <Grid.Column width={6}>
                        <ContributrForm/>
                    </Grid.Column>
                </Grid>
            </Layout>
        );
    }
}

export default CampaignShow;