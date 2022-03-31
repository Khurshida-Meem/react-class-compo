import React from 'react';

const Home = ({programmers, deleteProgrammer}) => {

    return (
        <div>
            {
                programmers.map(programmer => {
                    return(
                        <div key={programmer.name}>
                            <h3>{programmer.name}</h3>
                            <h5>{programmer.age}</h5>
                            <p>{programmer.location}</p>
                            <button onClick={() => deleteProgrammer(programmer.id)}>Delete one</button>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Home;