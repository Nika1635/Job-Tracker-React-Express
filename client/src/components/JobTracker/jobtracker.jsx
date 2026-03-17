import styles from './jobtracker.module.css'
import '../componentstyles.css'

export default function Jobtracker(){
    return(
        <section className='component-hero'>
            <div className='component-header'>
                <h1>Job Tracker</h1>
            </div>

            <div className='component-info'>
                <table>
                    <tr>
                        <th>Company name</th>
                        <th>Position</th>
                        <th>Status</th>
                    </tr>
                    <tr>
                        <td>Company</td>
                        <td>Junior Dev</td>
                        <td>Applied</td>
                    </tr>
                </table>
            </div>
        </section>
    )
}