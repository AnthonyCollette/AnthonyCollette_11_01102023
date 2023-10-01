import React, {useState} from 'react';

const Accordion = ({text, list, title}) => {

    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen(open => !open)
    }

    return (
        <div className={open ? `accordion open` : `accordion`}>
            <div className='accordion__header' onClick={handleClick}>
                <p>{title}</p>
                <svg width="24" height="15" viewBox="0 0 24 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.2103 13.8522C12.5409 14.5216 11.4538 14.5216 10.7843 13.8522L0.502064 3.56988C-0.167355 2.90046 -0.167355 1.81332 0.502064 1.1439C1.17148 0.474484 2.25862 0.474484 2.92804 1.1439L12 10.2159L21.072 1.14926C21.7414 0.47984 22.8285 0.47984 23.4979 1.14926C24.1674 1.81868 24.1674 2.90582 23.4979 3.57523L13.2157 13.8575L13.2103 13.8522Z" fill="white" />
                </svg>

            </div>
            <div className='accordion__content'>
                {text ? <p>{text}</p> : ''}
                {list ? <ul>{list.map(equipment => <li key={equipment}>{equipment}</li>)}</ul> : ''}
            </div>
        </div>
    );
};

export default Accordion;