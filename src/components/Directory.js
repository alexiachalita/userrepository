import React from 'react';

const Directory = (props) => {
    const { data } = props;
    return (
        <div>
            { data && data.length > 0 ? 
            (<table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th onClick={props.toggleSort}>Last Name</th>
                        <th>Email</th>
                        <th onClick={props.toggleFilter}>Job Title</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((el, idx) => (
                            <tr key={idx}>
                                <td>{el.first_name}</td>
                                <td>{el.last_name}</td>
                                <td>{el.email}</td>
                                <td>{el.job_title}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>)
            :
            (<h1>Loading Company Directory...</h1>)
            }
        </div>
    );
}

export default Directory;