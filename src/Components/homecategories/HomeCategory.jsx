
import "../homecategories/HomeCategory.css"
const HomeCategory = ({items}) => {
    return (
        <>
            <div className="hm-cat-wrapper">
                <img src={items.img} alt={items.imgCaption} className="w-100" />
                <div className="hm-cat-h-wrapper-body">
                    <p><strong>Lorem ipsum dolor sit amet consectetur adipisicing elit.</strong></p>
                    <p> Voluptas sapiente ullam corrupti! Iure similique sint</p>
                </div>
            </div>
        </>
    )
}

export default HomeCategory
