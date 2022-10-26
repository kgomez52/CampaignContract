pragma solidity ^0.4.17;

contract CampaignFactory{
    address[] public deployedCampaigns;

    // Function to create a new campaign and add it to the blockchain. It returns the address of where it was created
    function createCampaign(uint min) public{
        address newCampaign = new Campaign(min, msg.sender);
        deployedCampaigns.push(newCampaign);
    }

    // View means no data in the function can be changed
    function getDeployedCampaigns() public view returns (address[]){
        return deployedCampaigns;
    }
}


contract Campaign{
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    address public manager;
    uint public minContribution;
    mapping(address => bool) public approvers;
    Request[] public requests;
    uint public approversCount;

    // Modifer that only allows the manager to make a request for money. 
    // Can add it to any function to only allow the manager to use that function.
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }

    // Constructor
    // msg is a global var
    constructor(uint min, address creator) public{
        manager = creator;
        minContribution = min;
    }

    // payable keyword makes this function be able to receive some amount of money.
    function contribute() public payable{
        require(msg.value > minContribution);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient) public restricted{
        // Creating new Request in memory so we need the memory keyword
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        // Alternative way to create a new request.
        // Based on a consistant order of fields, look how the struct is setup.
        //Request(description, value, recipient, false);

        // Adding new request to list of request
        requests.push(newRequest);
    }

    function approveRequest(uint index) public{
        Request storage request = requests[index];

        require(approvers[msg.sender]); // Checking if it is a donor. If not a donor. function ends instantly
        require(!request.approvals[msg.sender]); // Check to see if donor voted on this request

        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest(uint index) public restricted{
        Request storage request = requests[index];
        
        require(request.approvalCount > (approversCount/2));
        require(!request.complete);

        request.recipient.transfer(request.value);
        request.complete = true;

    }
}