import http from '../http-transactions';
class ListTransactionsService {
    getAllTransactions() {
        return http.get("/poolTransactions");
    }
    
}
export default new ListTransactionsService();