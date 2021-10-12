import React from 'react';
import KitchenHeader from './KitchenHeader';
import OrdersList from './OrdersList';

    const KitchenView = () => {
        

    return (
        <div>
            <div>
                <KitchenHeader />
            </div>
            <div className="row">
                <OrdersList />
            </div>
        </div>
    )
}

export default KitchenView

