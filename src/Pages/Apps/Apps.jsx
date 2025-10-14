import React from 'react';
import AppCard from '../AppCard/AppCard';

const Apps = ({apps}) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 p-12'>
            {
                apps.slice(0,8).map(app => <AppCard key={app.id} app={app}></AppCard>)
            }
        </div>
    );
};

export default Apps;