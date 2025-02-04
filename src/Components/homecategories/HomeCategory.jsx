
import "./HomeCategory.css"
const HomeCategory = ({items}) => {
    return (
        <>
            <div className="hm-cat-wrapper">
                <img src={items.img} alt={items.imgCaption} className="w-100" />
                <div className="hm-cat-h-wrapper-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sapiente ullam corrupti! Iure similique sint, necessitatibus magnam nam illum fugit ut, architecto dolores suscipit in repellendus fuga, nostrum veritatis esse!</p>
                </div>
            </div>
        </>
    )
}

export default HomeCategory
