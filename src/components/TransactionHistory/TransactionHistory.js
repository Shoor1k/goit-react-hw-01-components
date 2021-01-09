import s from './TransactionHistory.module.css'
import PropTypes from "prop-types";

function TransactionHistory({ items }) {
    return (
        <table className={s.transactionHistory}>
            <thead>
                <tr className={s.title}>
                    <th className={s.type}>Type</th>
                    <th >Amount</th>
                    <th >Currency</th>
                </tr>
            </thead>

            <tbody>
                {
                    items.map(item => (
                        <tr key={item.id} className={s.item}>
                            <td className={s.type}>{item.type}</td>
                            <td className={s.amount}>{item.amount}</td>
                            <td className={s.currency}> {item.currency}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}

TransactionHistory.prototype = {
    items: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        }).isRequired,
    ),
}


export default TransactionHistory