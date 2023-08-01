import React, { Component } from "react";
import listTransactionService from "../services/list-transaction-service";
export default class ListTransactions extends Component {
    constructor(props) {
        super(props);

        this.retrieveTransactions = this.retrieveTransactions.bind(this);

        this.state = {
            transactions: []
        };
    }
    retrieveTransactions() {

        listTransactionService.getAllTransactions().then(
            response => {
                this.setState(
                    {
                        transactions: response.data
                    }
                );
                console.log(response.data);
            }).catch(e => {
                console.log(e.target);
            });

    }
    componentDidMount() {
        this.retrieveTransactions();
    }

    render() {
        const { transactions } = this.state;
        return (
            <table class="table table-hover">
                <caption>List of transactions</caption>
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">TXID</th>
                        <th scope="col">SENDER</th>
                        <th scope="col">RECEIVER</th>
                        <th scope="col">AMOUNT</th>
                        <th scope="col">GEN-TRAN</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions && transactions.map((transaction, index) => (
                        <tr>
                            <td>{transaction.transactionId}</td>
                            <td>{transaction.sender}</td>
                            <td>{transaction.receiver}</td>
                            <td>{transaction.amount}</td>
                            <td>{transaction.isGenesisTransaction}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }

}