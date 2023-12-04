import { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import ItemCard from '../Shared/ItemCard/ItemCard';

const ChefRecommend = () => {

    const [menu, setMenu] = useState([])

    useEffect(() => {
        fetch("menu.json")
        .then(res => res.json())
        .then(data => setMenu(data.filter(item => item.category === "offered")))
    },[])

    return (
        <section>
            <SectionTitle
            subHeading='Should Try'
            heading='Farian recommends'
            ></SectionTitle>
            <div className="grid md:grid-cols-3 place-items-center mb-10 mt-16">
                {menu.map(item => <ItemCard
                key={item._id}
                item={item}
                ></ItemCard>)}
            </div>
        </section>
    );
};

export default ChefRecommend;