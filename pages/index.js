import React, {Component} from 'react';
import facotry from '../ethereum/factory';
import {Card, Button} from 'semantic-ui-react';

class CampaignIndex extends Component{
    static async getInitialProps(){
        const campaigns = await facotry.methods.getDeployedCampaigns().call();

        return {campaigns};
    }

    renderCampaigns(){
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: <a>View Campaign</a>,
                fluid: true
            };
        });

        return <Card.Group items={items} />;
    }

    render(){
        return <div>
            <link
                async
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/semantic-ui@2/dist/semantic.min.css"
            />
            {this.renderCampaigns()}
            <Button
                content="Create Campaign"
                icon="add circle"
                primary
            />
        </div>
    }
}

export default CampaignIndex;