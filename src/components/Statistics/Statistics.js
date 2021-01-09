import s from "./Statistics.module.css";
import PropTypes from "prop-types";

function Statistics({ title, stats }) {
    return (
        <section className={s.statistics}>
            {title && <h2 className={s.title}>{title.toUpperCase()}</h2>}{ }

            <ul className={s.statList}>
                {stats.map(stat => (
                    <li className={s.item} key={stat.id}
                        style={{
                            backgroundColor: getRandomColorRGB(),
                        }}>
                        <span className={s.label}>{stat.label}  </span>
                        <span className={s.percentage}>{stat.percentage}</span>
                    </li>
                ))}

            </ul>
        </section >
    )
}
export default Statistics

function getRandomColor() {
    return Math.floor(Math.random() * 254) - 40;
}
function getRandomColorRGB() {
    return `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    ),

}