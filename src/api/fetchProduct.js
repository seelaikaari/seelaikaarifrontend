import { createAsyncThunk } from "@reduxjs/toolkit";
import img1 from "../assets/images/products/product-1.jpg";
import img2 from '../assets/images/products/product-2.jpg'
import img3 from "../assets/images/products/pr1.jpg";
import img4 from "../assets/images/products/pr2.jpg";
import img5 from "../assets/images/products/pr3.jpg";
import img6 from "../assets/images/products/pr4.jpg";
import img7 from "../assets/images/products/pr5.jpg";
// import img2 from ''
const products = [
  {
    id: 1,
    name: "Honorable",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    price: 6398.26,
    category: "Chanderi",
    brand: "Buzzdog",
    material: "Linen",
    color: [],
    images: [{ url: img1 }],
    stock: 20,
    reviews: [
      { customerName: "Aileen Skelhorn", rating: 1, reviewDate: "6/6/2021" },
      { customerName: "Greer Tewelson", rating: 0, reviewDate: "4/23/2020" },
      { customerName: "Aube Houchin", rating: 4, reviewDate: "6/20/2020" },
      {
        customerName: "Adriaens Tremoille",
        rating: 0,
        reviewDate: "5/10/2023",
      },
      { customerName: "Vivyanne Boarer", rating: 3, reviewDate: "12/19/2020" },
      { customerName: "Gibby Applegate", rating: 1, reviewDate: "5/2/2020" },
      { customerName: "Cole Guillard", rating: 3, reviewDate: "1/15/2023" },
      { customerName: "Saudra Bonett", rating: 4, reviewDate: "4/30/2022" },
      { customerName: "Valma Renney", rating: 2, reviewDate: "10/3/2022" },
      { customerName: "Manolo Ledekker", rating: 3, reviewDate: "6/14/2025" },
    ],
    size: [{ name: "L" }, { name: "L" }, { name: "XL" }],
  },
  {
    id: 2,
    name: "Honorable",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    price: 12198.7,
    category: "Chanderi",
    brand: "Mybuzz",
    material: "Silk",
    color: [
      { name: "Violet" },
      { name: "Blue" },
      { name: "Khaki" },
      { name: "Violet" },
      { name: "Maroon" },
      { name: "Mauv" },
      { name: "Yellow" },
      { name: "Pink" },
      { name: "Puce" },
      { name: "Crimson" },
    ],
    images: [{url:img2}],
    stock: 94,
    reviews: [
      { customerName: "Phineas Yersin", rating: 0, reviewDate: "7/11/2024" },
      { customerName: "Zollie Sherborn", rating: 2, reviewDate: "3/1/2021" },
      { customerName: "Bastien Foker", rating: 4, reviewDate: "12/9/2020" },
      { customerName: "Alene Fery", rating: 5, reviewDate: "5/1/2022" },
      { customerName: "Hobie McQuin", rating: 1, reviewDate: "6/22/2020" },
      { customerName: "Jerome Chalfain", rating: 4, reviewDate: "3/6/2020" },
      { customerName: "Marlyn Gavrielly", rating: 0, reviewDate: "6/5/2025" },
      { customerName: "Leisha Gallant", rating: 2, reviewDate: "8/4/2020" },
      { customerName: "Bengt Cholwell", rating: 2, reviewDate: "6/12/2024" },
      { customerName: "Tabor Aire", rating: 4, reviewDate: "1/19/2021" },
    ],
    size: [{ name: "M" }],
  },
  {
    id: 3,
    name: "Mr",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 14771.09,
    category: "Paithani",
    brand: "Flipstorm",
    material: "Wool",
    color: [
      { name: "Pink" },
      { name: "Indigo" },
      { name: "Blue" },
      { name: "Aquamarine" },
      { name: "Mauv" },
      { name: "Khaki" },
      { name: "Teal" },
      { name: "Turquoise" },
      { name: "Indigo" },
    ],
    images: [{ url: img3 }],
    stock: 76,
    reviews: [
      { customerName: "Roch Mangeney", rating: 4, reviewDate: "11/3/2023" },
      { customerName: "Bianca Scrivin", rating: 4, reviewDate: "5/9/2024" },
      { customerName: "Molly Cleaves", rating: 2, reviewDate: "4/28/2025" },
      { customerName: "Bryanty Erni", rating: 5, reviewDate: "5/16/2023" },
      { customerName: "Zelma Walrond", rating: 5, reviewDate: "12/21/2022" },
      { customerName: "Dode Heiden", rating: 0, reviewDate: "12/19/2023" },
      { customerName: "Catlee Cortnay", rating: 3, reviewDate: "4/26/2021" },
      { customerName: "Rupert Cottage", rating: 3, reviewDate: "3/20/2023" },
      { customerName: "Luella Paszak", rating: 4, reviewDate: "9/18/2021" },
    ],
    size: [{ name: "XXL" }, { name: "S" }, { name: "XXL" }],
  },
  {
    id: 4,
    name: "Ms",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 9608.84,
    category: "Chanderi",
    brand: "Wikizz",
    material: "Linen",
    color: [{ name: "Crimson" }],
    images: [{ url: img4 }],
    stock: 20,
    reviews: [
      { customerName: "Cori Coverlyn", rating: 4, reviewDate: "3/15/2020" },
      { customerName: "Orren Harmson", rating: 5, reviewDate: "10/20/2023" },
      { customerName: "Saxe Ropking", rating: 2, reviewDate: "12/20/2025" },
      { customerName: "Marguerite Trowl", rating: 2, reviewDate: "11/23/2022" },
      { customerName: "Maure Carlino", rating: 2, reviewDate: "10/6/2023" },
      { customerName: "Arri Loveitt", rating: 4, reviewDate: "6/24/2023" },
      {
        customerName: "Priscilla Rivalland",
        rating: 0,
        reviewDate: "4/21/2024",
      },
      { customerName: "Lucie Colliard", rating: 4, reviewDate: "11/10/2025" },
    ],
    size: [{ name: "XL" }, { name: "XL" }, { name: "XXL" }, { name: "L" }],
  },
  {
    id: 5,
    name: "Honorable",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 2813.56,
    category: "Gadwal",
    brand: "Mita",
    material: "Georgette",
    color: [{ name: "Teal" }],
    images: [
      {url:img2}
    ],
    stock: 98,
    reviews: [
      { customerName: "Ardelis McCluskey", rating: 3, reviewDate: "5/12/2021" },
      { customerName: "Helen Cecere", rating: 1, reviewDate: "8/4/2022" },
      { customerName: "Fredrika Lambot", rating: 1, reviewDate: "2/16/2025" },
      { customerName: "Mona Stockau", rating: 0, reviewDate: "5/25/2024" },
      { customerName: "Sheffy Slyne", rating: 1, reviewDate: "8/2/2023" },
      { customerName: "Ashla Payley", rating: 2, reviewDate: "1/9/2024" },
      { customerName: "Gibb Gawith", rating: 4, reviewDate: "11/9/2024" },
      { customerName: "Nananne MacLaren", rating: 1, reviewDate: "11/10/2020" },
      { customerName: "Evelyn Tilt", rating: 1, reviewDate: "12/7/2020" },
    ],
    size: [{ name: "XL" }, { name: "XL" }, { name: "XL" }],
  },
  {
    id: 6,
    name: "Mr",
    description:
      "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    price: 3868.91,
    category: "Chanderi",
    brand: "Leexo",
    material: "Chiffon",
    color: [
      { name: "Indigo" },
      { name: "Puce" },
      { name: "Green" },
      { name: "Pink" },
      { name: "Goldenrod" },
      { name: "Khaki" },
      { name: "Pink" },
      { name: "Red" },
    ],
    images: [
     {
      url:img2
     }
    ],
    stock: 28,
    reviews: [
      { customerName: "Ursala De Zamudio", rating: 2, reviewDate: "12/7/2023" },
    ],
    size: [{ name: "XL" }],
  },
  {
    id: 7,
    name: "Dr",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    price: 10192.11,
    category: "Kanchipuram",
    brand: "Jabbertype",
    material: "Cotton",
    color: [
      { name: "Turquoise" },
      { name: "Teal" },
      { name: "Goldenrod" },
      { name: "Blue" },
      { name: "Green" },
    ],
    images: [
      {
        url:img5
      }
    ],
    stock: 37,
    reviews: [
      { customerName: "Micheil O'Breen", rating: 2, reviewDate: "7/17/2024" },
      { customerName: "Florian Akaster", rating: 1, reviewDate: "1/4/2022" },
    ],
    size: [{ name: "XL" }],
  },
  {
    id: 8,
    name: "Ms",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    price: 11227.47,
    category: "Bandhani",
    brand: "Flashspan",
    material: "Georgette",
    color: [
      { name: "Orange" },
      { name: "Maroon" },
      { name: "Mauv" },
      { name: "Goldenrod" },
      { name: "Maroon" },
      { name: "Blue" },
      { name: "Red" },
      { name: "Pink" },
    ],
    images: [
      {
        url:img1
      }
    ],
    stock: 76,
    reviews: [
      { customerName: "Maggie Kenton", rating: 4, reviewDate: "11/6/2024" },
      {
        customerName: "Allistir Fetherstone",
        rating: 5,
        reviewDate: "6/1/2020",
      },
      {
        customerName: "Massimiliano Bentinck",
        rating: 5,
        reviewDate: "1/26/2020",
      },
      { customerName: "Alyse Porcher", rating: 4, reviewDate: "1/20/2020" },
      { customerName: "Lennard Waslin", rating: 3, reviewDate: "9/1/2024" },
      { customerName: "Nada Shakespeare", rating: 3, reviewDate: "1/2/2025" },
    ],
    size: [],
  },
  {
    id: 9,
    name: "Dr",
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 19946.54,
    category: "Pochampally",
    brand: "Photobug",
    material: "Chiffon",
    color: [
      { name: "Mauv" },
      { name: "Maroon" },
      { name: "Yellow" },
      { name: "Crimson" },
      { name: "Mauv" },
      { name: "Puce" },
      { name: "Pink" },
    ],
    images: [{
      url:img3
    }],
    stock: 47,
    reviews: [
      { customerName: "Shaw Ceaplen", rating: 5, reviewDate: "4/22/2020" },
      { customerName: "Evelyn Tieraney", rating: 0, reviewDate: "3/28/2022" },
      { customerName: "Berti MacCurlye", rating: 2, reviewDate: "12/27/2022" },
      { customerName: "Ulrich McIlreavy", rating: 5, reviewDate: "10/27/2024" },
      { customerName: "Zackariah Simenon", rating: 4, reviewDate: "1/14/2024" },
      { customerName: "Lowell Clemmow", rating: 1, reviewDate: "1/17/2022" },
      { customerName: "Lorilee Holmyard", rating: 5, reviewDate: "2/2/2020" },
      { customerName: "Gilligan Grieves", rating: 3, reviewDate: "6/18/2025" },
    ],
    size: [{ name: "L" }, { name: "M" }],
  },
  {
    id: 10,
    name: "Ms",
    description:
      "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    price: 1440.05,
    category: "Gadwal",
    brand: "Ooba",
    material: "Net",
    color: [
      { name: "Crimson" },
      { name: "Teal" },
      { name: "Green" },
      { name: "Puce" },
      { name: "Indigo" },
      { name: "Khaki" },
      { name: "Teal" },
      { name: "Purple" },
      { name: "Puce" },
      { name: "Turquoise" },
    ],
    images: [
     
      {
        url:img1
      }
    ],
    stock: 5,
    reviews: [
      { customerName: "Adair Giroldi", rating: 5, reviewDate: "1/27/2020" },
      { customerName: "Ray Dutnell", rating: 3, reviewDate: "3/5/2020" },
      { customerName: "Baxter Hastwell", rating: 3, reviewDate: "6/4/2020" },
    ],
    size: [{ name: "M" }, { name: "L" }, { name: "XXL" }],
  },
  {
    id: 11,
    name: "Ms",
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    price: 246.64,
    category: "Gadwal",
    brand: "Jabbertype",
    material: "Wool",
    color: [{ name: "Red" }],
    images: [{
      url:img7
    }],
    stock: 12,
    reviews: [
      { customerName: "Latia Kohn", rating: 5, reviewDate: "7/8/2020" },
      { customerName: "Bell Pollack", rating: 5, reviewDate: "7/6/2023" },
      { customerName: "Wilden Olding", rating: 4, reviewDate: "2/18/2022" },
    ],
    size: [
      { name: "XL" },
      { name: "M" },
      { name: "XL" },
      { name: "L" },
      { name: "XXL" },
    ],
  },
  {
    id: 12,
    name: "Ms",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    price: 10827.53,
    category: "Bandhani",
    brand: "Centizu",
    material: "Wool",
    color: [
      { name: "Maroon" },
      { name: "Mauv" },
      { name: "Puce" },
      { name: "Crimson" },
      { name: "Purple" },
      { name: "Orange" },
      { name: "Khaki" },
    ],
    images: [
      {
        url:img4
      }
    ],
    stock: 16,
    reviews: [
      { customerName: "Donella Aicheson", rating: 2, reviewDate: "5/12/2022" },
      { customerName: "Diego Zoephel", rating: 5, reviewDate: "7/10/2022" },
      { customerName: "Phebe Corderoy", rating: 0, reviewDate: "2/4/2024" },
      {
        customerName: "Marguerite Tadlow",
        rating: 0,
        reviewDate: "11/13/2025",
      },
      { customerName: "Shepherd Eaton", rating: 0, reviewDate: "5/4/2024" },
      { customerName: "Derward Pickance", rating: 3, reviewDate: "12/25/2020" },
      { customerName: "Emyle Hubeaux", rating: 2, reviewDate: "7/3/2024" },
      {
        customerName: "Rey Van der Veldt",
        rating: 3,
        reviewDate: "12/23/2024",
      },
    ],
    size: [{ name: "XXL" }, { name: "L" }],
  },
  {
    id: 13,
    name: "Rev",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    price: 5895.98,
    category: "Chanderi",
    brand: "Vidoo",
    material: "Wool",
    color: [
      { name: "Puce" },
      { name: "Orange" },
      { name: "Pink" },
      { name: "Red" },
      { name: "Khaki" },
    ],
    images: [
      {
        url:img1
      }
    ],
    stock: 68,
    reviews: [
      { customerName: "Britteny Pedlow", rating: 4, reviewDate: "10/28/2022" },
      { customerName: "Zed Alp", rating: 0, reviewDate: "1/12/2025" },
      { customerName: "Lyn MacMenamy", rating: 4, reviewDate: "9/23/2021" },
      { customerName: "Noemi Dellenbrook", rating: 3, reviewDate: "9/20/2020" },
      { customerName: "Avivah O'Doogan", rating: 1, reviewDate: "3/13/2020" },
      { customerName: "Gwynne Mee", rating: 2, reviewDate: "11/4/2024" },
      { customerName: "Edan Hews", rating: 0, reviewDate: "11/5/2024" },
      { customerName: "Giacobo Gottelier", rating: 2, reviewDate: "8/7/2023" },
    ],
    size: [{ name: "L" }, { name: "L" }],
  },
  {
    id: 14,
    name: "Ms",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
    price: 290.97,
    category: "Banarasi",
    brand: "Wikizz",
    material: "Chiffon",
    color: [{ name: "Teal" }],
    images: [{
      url:img7
    }],
    stock: 26,
    reviews: [
      { customerName: "Perry Hinge", rating: 0, reviewDate: "9/27/2020" },
      { customerName: "Freddy Mallaby", rating: 3, reviewDate: "10/21/2021" },
      { customerName: "Cally Leaver", rating: 3, reviewDate: "3/19/2020" },
      { customerName: "Brig Hinchcliffe", rating: 5, reviewDate: "9/15/2020" },
      { customerName: "Scarlett Roblou", rating: 1, reviewDate: "9/18/2020" },
      { customerName: "Jenifer Doumic", rating: 4, reviewDate: "4/15/2024" },
      { customerName: "Eleonore Bowering", rating: 3, reviewDate: "10/6/2020" },
      { customerName: "Barr Flieg", rating: 2, reviewDate: "11/8/2021" },
    ],
    size: [
      { name: "XXL" },
      { name: "M" },
      { name: "S" },
      { name: "L" },
      { name: "XL" },
    ],
  },
  {
    id: 15,
    name: "Honorable",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    price: 4030.8,
    category: "Pochampally",
    brand: "Blogtags",
    material: "Silk",
    color: [
      { name: "Mauv" },
      { name: "Mauv" },
      { name: "Violet" },
      { name: "Red" },
      { name: "Fuscia" },
      { name: "Turquoise" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 71,
    reviews: [
      { customerName: "Tallia Marsland", rating: 0, reviewDate: "5/4/2020" },
      { customerName: "Gordon Ceaplen", rating: 1, reviewDate: "1/18/2023" },
      { customerName: "Bob Clynter", rating: 0, reviewDate: "12/29/2024" },
      { customerName: "Berna Lefever", rating: 2, reviewDate: "6/22/2024" },
      { customerName: "Bellina Goodere", rating: 0, reviewDate: "6/27/2020" },
      { customerName: "Mano Burditt", rating: 4, reviewDate: "3/26/2023" },
      { customerName: "Kalie Drohan", rating: 1, reviewDate: "9/25/2021" },
      { customerName: "Retha Rosenschein", rating: 2, reviewDate: "7/21/2021" },
      { customerName: "Bella Goathrop", rating: 3, reviewDate: "10/1/2020" },
      {
        customerName: "Constantina Lawday",
        rating: 2,
        reviewDate: "1/21/2025",
      },
    ],
    size: [{ name: "S" }, { name: "XL" }, { name: "XXL" }],
  },
  {
    id: 16,
    name: "Mrs",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    price: 15267.37,
    category: "Paithani",
    brand: "Realcube",
    material: "Silk",
    color: [
      { name: "Turquoise" },
      { name: "Aquamarine" },
      { name: "Red" },
      { name: "Maroon" },
      { name: "Puce" },
      { name: "Turquoise" },
      { name: "Purple" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 14,
    reviews: [
      { customerName: "Wendy Curnock", rating: 3, reviewDate: "11/18/2023" },
      { customerName: "Gan Cosbee", rating: 0, reviewDate: "3/1/2022" },
      {
        customerName: "Nickolaus Lascell",
        rating: 0,
        reviewDate: "10/24/2023",
      },
      { customerName: "Harman Massot", rating: 3, reviewDate: "3/18/2022" },
    ],
    size: [],
  },
  {
    id: 17,
    name: "Dr",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    price: 17408.87,
    category: "Paithani",
    brand: "Edgeblab",
    material: "Net",
    color: [
      { name: "Orange" },
      { name: "Maroon" },
      { name: "Crimson" },
      { name: "Red" },
      { name: "Turquoise" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 69,
    reviews: [],
    size: [{ name: "XL" }, { name: "M" }],
  },
  {
    id: 18,
    name: "Honorable",
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    price: 5298.38,
    category: "Paithani",
    brand: "Teklist",
    material: "Chiffon",
    color: [
      { name: "Fuscia" },
      { name: "Blue" },
      { name: "Blue" },
      { name: "Mauv" },
      { name: "Fuscia" },
      { name: "Blue" },
      { name: "Green" },
      { name: "Goldenrod" },
      { name: "Indigo" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 92,
    reviews: [
      {
        customerName: "Pembroke Vlasenkov",
        rating: 3,
        reviewDate: "5/30/2023",
      },
      { customerName: "Shina Rumin", rating: 1, reviewDate: "8/27/2025" },
      { customerName: "Edy Hawkwood", rating: 3, reviewDate: "8/30/2024" },
    ],
    size: [{ name: "XL" }, { name: "S" }],
  },
  {
    id: 19,
    name: "Rev",
    description: "In congue. Etiam justo. Etiam pretium iaculis justo.",
    price: 10378.56,
    category: "Chanderi",
    brand: "Fivebridge",
    material: "Wool",
    color: [
      { name: "Violet" },
      { name: "Teal" },
      { name: "Purple" },
      { name: "Green" },
      { name: "Crimson" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 10,
    reviews: [
      { customerName: "Dotti Devoy", rating: 0, reviewDate: "7/5/2024" },
      { customerName: "Royall Getcliffe", rating: 2, reviewDate: "7/20/2022" },
      {
        customerName: "Jackelyn Malkinson",
        rating: 2,
        reviewDate: "11/19/2023",
      },
      { customerName: "Creigh Darwen", rating: 3, reviewDate: "1/11/2020" },
      { customerName: "Samuel Brandenburg", rating: 4, reviewDate: "2/3/2021" },
      { customerName: "Curr Haysham", rating: 0, reviewDate: "9/1/2022" },
      { customerName: "Babette Munning", rating: 1, reviewDate: "11/27/2021" },
      { customerName: "Ciro Amaya", rating: 0, reviewDate: "9/15/2025" },
    ],
    size: [{ name: "L" }, { name: "XL" }, { name: "XL" }, { name: "XXL" }],
  },
  {
    id: 20,
    name: "Mrs",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    price: 2903.76,
    category: "Bandhani",
    brand: "Youbridge",
    material: "Chiffon",
    color: [
      { name: "Teal" },
      { name: "Puce" },
      { name: "Aquamarine" },
      { name: "Goldenrod" },
      { name: "Teal" },
      { name: "Yellow" },
      { name: "Pink" },
      { name: "Teal" },
      { name: "Mauv" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 90,
    reviews: [
      { customerName: "Stanton Danis", rating: 3, reviewDate: "2/6/2020" },
    ],
    size: [
      { name: "S" },
      { name: "M" },
      { name: "XL" },
      { name: "S" },
      { name: "L" },
    ],
  },
  {
    id: 21,
    name: "Ms",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    price: 15176.45,
    category: "Kanchipuram",
    brand: "Twiyo",
    material: "Cotton",
    color: [{ name: "Turquoise" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 39,
    reviews: [
      { customerName: "Obediah MacCathay", rating: 3, reviewDate: "6/14/2022" },
      { customerName: "Durand Digan", rating: 1, reviewDate: "1/2/2024" },
      { customerName: "Maribel Pelerin", rating: 2, reviewDate: "2/22/2024" },
      { customerName: "Kylila Blankman", rating: 5, reviewDate: "9/5/2021" },
      { customerName: "Ricky MacGibbon", rating: 5, reviewDate: "2/19/2021" },
      { customerName: "Toiboid Torricella", rating: 2, reviewDate: "7/5/2022" },
      { customerName: "Granger McGuinley", rating: 2, reviewDate: "7/7/2022" },
      { customerName: "Roseanna Searle", rating: 1, reviewDate: "8/4/2023" },
      { customerName: "Tersina McNee", rating: 4, reviewDate: "12/9/2025" },
      { customerName: "Bram Thame", rating: 5, reviewDate: "12/27/2025" },
    ],
    size: [
      { name: "L" },
      { name: "M" },
      { name: "M" },
      { name: "M" },
      { name: "XL" },
    ],
  },
  {
    id: 22,
    name: "Mr",
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
    price: 270.73,
    category: "Paithani",
    brand: "Skinte",
    material: "Net",
    color: [
      { name: "Puce" },
      { name: "Indigo" },
      { name: "Crimson" },
      { name: "Mauv" },
      { name: "Puce" },
      { name: "Puce" },
      { name: "Goldenrod" },
    ],
    images: [{
      url:img6
    }],
    stock: 29,
    reviews: [
      { customerName: "Bibi Ramsdale", rating: 3, reviewDate: "12/21/2021" },
      { customerName: "Noellyn Tingey", rating: 3, reviewDate: "2/2/2022" },
      { customerName: "Adelind Morgon", rating: 0, reviewDate: "9/18/2023" },
      { customerName: "Gwenny Menguy", rating: 5, reviewDate: "12/13/2024" },
      { customerName: "Guthrie Duffy", rating: 3, reviewDate: "8/8/2024" },
      { customerName: "Aubree McCay", rating: 2, reviewDate: "8/7/2020" },
      { customerName: "Hiram MacKill", rating: 5, reviewDate: "1/27/2022" },
      { customerName: "Binnie Lettsom", rating: 2, reviewDate: "5/10/2020" },
    ],
    size: [{ name: "XXL" }, { name: "M" }],
  },
  {
    id: 23,
    name: "Rev",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.",
    price: 10746.4,
    category: "Gadwal",
    brand: "Dynazzy",
    material: "Chiffon",
    color: [
      { name: "Violet" },
      { name: "Maroon" },
      { name: "Blue" },
      { name: "Puce" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 97,
    reviews: [
      { customerName: "Korrie Kernocke", rating: 2, reviewDate: "2/25/2024" },
      { customerName: "Trina Luppitt", rating: 2, reviewDate: "4/11/2022" },
      { customerName: "Jerome Vamplers", rating: 2, reviewDate: "6/21/2020" },
      { customerName: "Gerome Jarmyn", rating: 5, reviewDate: "9/22/2021" },
      { customerName: "Javier Charlotte", rating: 2, reviewDate: "10/16/2025" },
    ],
    size: [{ name: "XXL" }, { name: "M" }, { name: "XL" }, { name: "L" }],
  },
  {
    id: 24,
    name: "Rev",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    price: 7513.09,
    category: "Banarasi",
    brand: "Abata",
    material: "Net",
    color: [{ name: "Pink" }, { name: "Goldenrod" }, { name: "Yellow" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 29,
    reviews: [
      { customerName: "Lois De Hooge", rating: 4, reviewDate: "7/16/2020" },
      { customerName: "Dev Leigh", rating: 1, reviewDate: "3/7/2020" },
      { customerName: "Miof mela Noton", rating: 3, reviewDate: "5/14/2025" },
      { customerName: "Denna Playden", rating: 0, reviewDate: "8/9/2023" },
      { customerName: "Kathe Gelling", rating: 5, reviewDate: "8/26/2020" },
      { customerName: "Cordey Imorts", rating: 3, reviewDate: "12/23/2024" },
    ],
    size: [{ name: "L" }, { name: "XXL" }],
  },
  {
    id: 25,
    name: "Mrs",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    price: 14025.08,
    category: "Pochampally",
    brand: "Abatz",
    material: "Silk",
    color: [
      { name: "Turquoise" },
      { name: "Purple" },
      { name: "Crimson" },
      { name: "Yellow" },
      { name: "Crimson" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 26,
    reviews: [
      { customerName: "Desmund Cucuzza", rating: 3, reviewDate: "11/15/2024" },
      { customerName: "Warner O'Corren", rating: 5, reviewDate: "10/24/2024" },
      { customerName: "Bonnie Battman", rating: 0, reviewDate: "10/1/2020" },
      { customerName: "Zacharia Fend", rating: 0, reviewDate: "12/25/2024" },
      { customerName: "Asia Copsey", rating: 2, reviewDate: "11/9/2022" },
      { customerName: "Corri Balazin", rating: 4, reviewDate: "8/8/2021" },
      { customerName: "Carter Isard", rating: 1, reviewDate: "7/19/2022" },
    ],
    size: [{ name: "XL" }],
  },
  {
    id: 26,
    name: "Honorable",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    price: 9509.36,
    category: "Kanchipuram",
    brand: "Miboo",
    material: "Chiffon",
    color: [
      { name: "Green" },
      { name: "Green" },
      { name: "Violet" },
      { name: "Turquoise" },
      { name: "Violet" },
      { name: "Pink" },
      { name: "Orange" },
      { name: "Goldenrod" },
      { name: "Khaki" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 40,
    reviews: [
      { customerName: "Freedman Bence", rating: 3, reviewDate: "10/25/2023" },
      {
        customerName: "Montague Nunnerley",
        rating: 1,
        reviewDate: "10/3/2024",
      },
      { customerName: "Dagmar Spadazzi", rating: 5, reviewDate: "8/5/2025" },
      { customerName: "Craggy Smalles", rating: 0, reviewDate: "6/5/2023" },
      { customerName: "Helsa D'Ambrogi", rating: 4, reviewDate: "7/1/2023" },
      {
        customerName: "Reggie Coulthurst",
        rating: 3,
        reviewDate: "11/23/2020",
      },
      { customerName: "Ingunna Kenafaque", rating: 3, reviewDate: "3/21/2021" },
    ],
    size: [{ name: "XXL" }, { name: "XXL" }, { name: "S" }, { name: "XXL" }],
  },
  {
    id: 27,
    name: "Dr",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    price: 2726.89,
    category: "Chanderi",
    brand: "Jamia",
    material: "Wool",
    color: [
      { name: "Khaki" },
      { name: "Aquamarine" },
      { name: "Teal" },
      { name: "Teal" },
      { name: "Aquamarine" },
      { name: "Khaki" },
      { name: "Teal" },
    ],
    images: [
      {
        url: img1,
      },
    ],
    stock: 82,
    reviews: [
      { customerName: "Cullan Widdicombe", rating: 0, reviewDate: "4/28/2022" },
      { customerName: "Cybill Glaum", rating: 1, reviewDate: "3/6/2023" },
      { customerName: "Cicely Ragsdall", rating: 0, reviewDate: "7/17/2024" },
      { customerName: "Nerte Cowndley", rating: 0, reviewDate: "5/4/2022" },
      { customerName: "Phylys Bester", rating: 4, reviewDate: "4/14/2020" },
      { customerName: "Nicholas Cufflin", rating: 4, reviewDate: "6/12/2021" },
      { customerName: "Boote Raff", rating: 3, reviewDate: "3/19/2020" },
      { customerName: "Grace Mattiazzo", rating: 1, reviewDate: "8/21/2022" },
    ],
    size: [{ name: "XXL" }, { name: "XL" }, { name: "M" }, { name: "M" }],
  },
  {
    id: 28,
    name: "Dr",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    price: 8252.1,
    category: "Chanderi",
    brand: "Aimbu",
    material: "Linen",
    color: [
      { name: "Purple" },
      { name: "Indigo" },
      { name: "Teal" },
      { name: "Puce" },
      { name: "Aquamarine" },
      { name: "Aquamarine" },
      { name: "Goldenrod" },
      { name: "Green" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 62,
    reviews: [
      { customerName: "Rossie Curness", rating: 2, reviewDate: "10/13/2022" },
      {
        customerName: "Minnaminnie Severns",
        rating: 3,
        reviewDate: "7/19/2023",
      },
      { customerName: "Nedda Spileman", rating: 1, reviewDate: "12/16/2024" },
      { customerName: "Auberta Harm", rating: 1, reviewDate: "7/21/2020" },
      { customerName: "Isabeau Spickett", rating: 1, reviewDate: "1/24/2023" },
      { customerName: "Barnabas Kipling", rating: 3, reviewDate: "11/22/2022" },
    ],
    size: [],
  },
  {
    id: 29,
    name: "Mrs",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    price: 11993.24,
    category: "Bandhani",
    brand: "Gigaclub",
    material: "Linen",
    color: [
      { name: "Aquamarine" },
      { name: "Turquoise" },
      { name: "Orange" },
      { name: "Blue" },
      { name: "Green" },
      { name: "Puce" },
      { name: "Teal" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 42,
    reviews: [
      { customerName: "Anthony Frohock", rating: 3, reviewDate: "10/3/2021" },
    ],
    size: [{ name: "XL" }],
  },
  {
    id: 30,
    name: "Mr",
    description:
      "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    price: 16336.22,
    category: "Gadwal",
    brand: "Shuffletag",
    material: "Net",
    color: [],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 12,
    reviews: [
      { customerName: "Elias Berthel", rating: 2, reviewDate: "6/28/2025" },
      { customerName: "Cally Minton", rating: 0, reviewDate: "8/15/2022" },
      { customerName: "Hillie Oakinfold", rating: 1, reviewDate: "5/9/2022" },
      { customerName: "Graig Alten", rating: 0, reviewDate: "12/3/2022" },
    ],
    size: [],
  },
  {
    id: 31,
    name: "Honorable",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    price: 17773.18,
    category: "Banarasi",
    brand: "Blognation",
    material: "Wool",
    color: [
      { name: "Puce" },
      { name: "Purple" },
      { name: "Pink" },
      { name: "Pink" },
      { name: "Aquamarine" },
      { name: "Puce" },
      { name: "Mauv" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 58,
    reviews: [],
    size: [{ name: "S" }, { name: "L" }, { name: "L" }, { name: "S" }],
  },
  {
    id: 32,
    name: "Mrs",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    price: 15761.2,
    category: "Paithani",
    brand: "Twitternation",
    material: "Chiffon",
    color: [{ name: "Orange" }, { name: "Khaki" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 22,
    reviews: [
      { customerName: "Anallise Gilgryst", rating: 0, reviewDate: "12/4/2024" },
      { customerName: "Maxie Wooller", rating: 3, reviewDate: "10/4/2023" },
      { customerName: "Constance Cash", rating: 3, reviewDate: "12/20/2020" },
      { customerName: "Lilli Snalham", rating: 3, reviewDate: "12/22/2025" },
      { customerName: "Emilia Leitche", rating: 5, reviewDate: "8/12/2023" },
      {
        customerName: "Claudianus Chevolleau",
        rating: 0,
        reviewDate: "12/4/2020",
      },
    ],
    size: [{ name: "XL" }],
  },
  {
    id: 33,
    name: "Honorable",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    price: 13311.73,
    category: "Pochampally",
    brand: "Quatz",
    material: "Linen",
    color: [
      { name: "Yellow" },
      { name: "Blue" },
      { name: "Indigo" },
      { name: "Crimson" },
      { name: "Turquoise" },
      { name: "Khaki" },
      { name: "Khaki" },
      { name: "Purple" },
    ],
    images: [{
      url:img5
    }],
    stock: 37,
    reviews: [
      { customerName: "Alicia Hymers", rating: 0, reviewDate: "5/4/2024" },
      { customerName: "Massimo Kellen", rating: 2, reviewDate: "12/24/2022" },
    ],
    size: [],
  },
  {
    id: 34,
    name: "Rev",
    description:
      "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    price: 14460.78,
    category: "Paithani",
    brand: "Lajo",
    material: "Wool",
    color: [{ name: "Yellow" }, { name: "Pink" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 5,
    reviews: [
      { customerName: "Dela Ortet", rating: 5, reviewDate: "4/7/2023" },
      { customerName: "Talyah Turfitt", rating: 1, reviewDate: "7/2/2022" },
      { customerName: "Corinna Rappaport", rating: 0, reviewDate: "5/24/2020" },
      { customerName: "Fons Wickwarth", rating: 3, reviewDate: "11/4/2023" },
      { customerName: "Cordy Matteoni", rating: 4, reviewDate: "12/12/2022" },
      { customerName: "Lennard Hiers", rating: 0, reviewDate: "11/15/2023" },
      { customerName: "Pier Pegden", rating: 5, reviewDate: "1/23/2024" },
    ],
    size: [],
  },
  {
    id: 35,
    name: "Ms",
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    price: 11560.72,
    category: "Bandhani",
    brand: "Oodoo",
    material: "Silk",
    color: [{ name: "Fuscia" }, { name: "Blue" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 74,
    reviews: [
      { customerName: "Stillmann Nansom", rating: 5, reviewDate: "7/14/2024" },
      { customerName: "Sherwin Kayley", rating: 2, reviewDate: "3/30/2025" },
    ],
    size: [],
  },
  {
    id: 36,
    name: "Ms",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 844.06,
    category: "Chanderi",
    brand: "Einti",
    material: "Cotton",
    color: [{ name: "Maroon" }, { name: "Mauv" }, { name: "Violet" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 52,
    reviews: [
      {
        customerName: "Alphonso Kohrding",
        rating: 2,
        reviewDate: "10/25/2025",
      },
      { customerName: "Bram Boord", rating: 2, reviewDate: "7/18/2024" },
      { customerName: "Bobette Woodfine", rating: 3, reviewDate: "12/19/2020" },
      { customerName: "York MacNelly", rating: 2, reviewDate: "4/26/2020" },
      { customerName: "Evin Shepherdson", rating: 1, reviewDate: "12/3/2020" },
      { customerName: "Izaak Mc Combe", rating: 0, reviewDate: "3/5/2022" },
      { customerName: "Delmore Chaperlin", rating: 1, reviewDate: "1/26/2025" },
      { customerName: "Zak Dyka", rating: 1, reviewDate: "6/15/2021" },
      { customerName: "Burgess Grzesiak", rating: 5, reviewDate: "2/12/2021" },
    ],
    size: [{ name: "M" }, { name: "L" }, { name: "XXL" }, { name: "XXL" }],
  },
  {
    id: 37,
    name: "Mr",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.",
    price: 15812.24,
    category: "Gadwal",
    brand: "Kazio",
    material: "Cotton",
    color: [
      { name: "Goldenrod" },
      { name: "Mauv" },
      { name: "Khaki" },
      { name: "Purple" },
      { name: "Purple" },
      { name: "Fuscia" },
      { name: "Red" },
      { name: "Violet" },
      { name: "Green" },
    ],
    images: [
      {
        url: img1,
      },
    ],
    stock: 65,
    reviews: [
      { customerName: "Micheil O'Bradain", rating: 1, reviewDate: "8/16/2024" },
      { customerName: "Hernando Brunone", rating: 0, reviewDate: "3/30/2021" },
      { customerName: "Judy Ubee", rating: 0, reviewDate: "6/3/2020" },
      { customerName: "Lira Ruppertz", rating: 4, reviewDate: "2/19/2022" },
      { customerName: "Jan Iban", rating: 5, reviewDate: "8/12/2020" },
      { customerName: "Ephrem Whitmore", rating: 5, reviewDate: "3/3/2024" },
    ],
    size: [{ name: "M" }, { name: "XL" }, { name: "S" }],
  },
  {
    id: 38,
    name: "Honorable",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    price: 3978.81,
    category: "Banarasi",
    brand: "Flashspan",
    material: "Georgette",
    color: [],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 21,
    reviews: [
      { customerName: "Eydie Beatey", rating: 4, reviewDate: "11/23/2021" },
      { customerName: "Martyn Baudinot", rating: 2, reviewDate: "1/9/2021" },
    ],
    size: [{ name: "S" }, { name: "L" }, { name: "XL" }, { name: "L" }],
  },
  {
    id: 39,
    name: "Rev",
    description:
      "Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    price: 13539.47,
    category: "Gadwal",
    brand: "Skipfire",
    material: "Net",
    color: [
      { name: "Green" },
      { name: "Red" },
      { name: "Crimson" },
      { name: "Blue" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 25,
    reviews: [
      { customerName: "Lorelle Checklin", rating: 4, reviewDate: "1/28/2021" },
      { customerName: "Vachel Blowin", rating: 2, reviewDate: "12/1/2024" },
      { customerName: "Holmes Crust", rating: 4, reviewDate: "10/22/2023" },
    ],
    size: [{ name: "XXL" }],
  },
  {
    id: 40,
    name: "Dr",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    price: 3175.51,
    category: "Paithani",
    brand: "Kayveo",
    material: "Net",
    color: [],
    images: [
      {
        url: img6,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 49,
    reviews: [
      { customerName: "Shea Garms", rating: 4, reviewDate: "11/24/2025" },
      { customerName: "Tully Duxbarry", rating: 4, reviewDate: "1/19/2025" },
    ],
    size: [{ name: "XL" }, { name: "L" }, { name: "XXL" }, { name: "L" }],
  },
  {
    id: 41,
    name: "Dr",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    price: 16311.57,
    category: "Gadwal",
    brand: "Realblab",
    material: "Net",
    color: [
      { name: "Goldenrod" },
      { name: "Maroon" },
      { name: "Blue" },
      { name: "Indigo" },
      { name: "Purple" },
      { name: "Green" },
      { name: "Yellow" },
    ],
    images: [
      {
        url: img7,
      },
      {
        url: img1,
      },
    ],
    stock: 39,
    reviews: [
      { customerName: "Almira Vinecombe", rating: 4, reviewDate: "7/20/2023" },
    ],
    size: [],
  },
  {
    id: 42,
    name: "Honorable",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    price: 16289.81,
    category: "Gadwal",
    brand: "Vinder",
    material: "Chiffon",
    color: [
      { name: "Maroon" },
      { name: "Turquoise" },
      { name: "Purple" },
      { name: "Fuscia" },
      { name: "Turquoise" },
      { name: "Turquoise" },
      { name: "Violet" },
      { name: "Fuscia" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 57,
    reviews: [],
    size: [],
  },
  {
    id: 43,
    name: "Rev",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    price: 15934.6,
    category: "Kanchipuram",
    brand: "Trudoo",
    material: "Silk",
    color: [
      { name: "Pink" },
      { name: "Khaki" },
      { name: "Puce" },
      { name: "Turquoise" },
      { name: "Green" },
      { name: "Orange" },
    ],
    images: [{
      url:img4
    }],
    stock: 23,
    reviews: [
      { customerName: "Kory McKitterick", rating: 4, reviewDate: "5/14/2021" },
      { customerName: "Cloris Dorling", rating: 4, reviewDate: "1/3/2025" },
      { customerName: "Amii Gormally", rating: 1, reviewDate: "10/30/2021" },
      { customerName: "Magdaia Longmore", rating: 3, reviewDate: "3/5/2023" },
      { customerName: "Jeffy Bellefonte", rating: 0, reviewDate: "6/1/2020" },
      { customerName: "Dicky Chamney", rating: 2, reviewDate: "12/13/2024" },
      { customerName: "Bennie Greatorex", rating: 0, reviewDate: "11/18/2022" },
      {
        customerName: "Coraline Kennefick",
        rating: 4,
        reviewDate: "1/11/2023",
      },
      { customerName: "Padraic Lampkin", rating: 0, reviewDate: "5/20/2025" },
    ],
    size: [{ name: "M" }, { name: "M" }],
  },
  {
    id: 44,
    name: "Mr",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    price: 7518.57,
    category: "Paithani",
    brand: "Edgeify",
    material: "Wool",
    color: [
      { name: "Pink" },
      { name: "Maroon" },
      { name: "Green" },
      { name: "Khaki" },
      { name: "Red" },
      { name: "Khaki" },
      { name: "Green" },
      { name: "Yellow" },
      { name: "Fuscia" },
    ],
    images: [
      {
        url: img7,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 4,
    reviews: [],
    size: [
      { name: "M" },
      { name: "L" },
      { name: "M" },
      { name: "XXL" },
      { name: "XL" },
    ],
  },
  {
    id: 45,
    name: "Rev",
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    price: 8836.27,
    category: "Kanchipuram",
    brand: "Tagcat",
    material: "Chiffon",
    color: [{ name: "Yellow" }],
    images: [
      {
        url: img6,
      },
    ],
    stock: 5,
    reviews: [
      { customerName: "Hubert Butt", rating: 5, reviewDate: "11/28/2023" },
      { customerName: "Torrance Jurczik", rating: 1, reviewDate: "5/4/2020" },
      { customerName: "Emilia Miles", rating: 0, reviewDate: "1/23/2020" },
      { customerName: "Cheslie Mcwhinney", rating: 2, reviewDate: "5/24/2022" },
      { customerName: "Meris Delucia", rating: 3, reviewDate: "11/2/2022" },
      { customerName: "Celestyn Pantlin", rating: 5, reviewDate: "5/25/2021" },
      { customerName: "Anthony Summerlie", rating: 3, reviewDate: "3/18/2023" },
      { customerName: "Anton Kember", rating: 4, reviewDate: "3/19/2022" },
      { customerName: "Saxe Jelly", rating: 1, reviewDate: "5/26/2021" },
    ],
    size: [],
  },
  {
    id: 46,
    name: "Rev",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    price: 9992.52,
    category: "Kanchipuram",
    brand: "Jabbercube",
    material: "Silk",
    color: [
      { name: "Goldenrod" },
      { name: "Fuscia" },
      { name: "Red" },
      { name: "Pink" },
      { name: "Violet" },
      { name: "Turquoise" },
      { name: "Puce" },
      { name: "Aquamarine" },
      { name: "Puce" },
    ],
    images: [
      { url: img1 },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 81,
    reviews: [
      { customerName: "Viviyan Maceur", rating: 4, reviewDate: "1/6/2023" },
      { customerName: "Zeb Merryman", rating: 0, reviewDate: "8/24/2022" },
      { customerName: "Sherri Ferras", rating: 3, reviewDate: "2/14/2021" },
      { customerName: "Spencer Debrick", rating: 1, reviewDate: "5/25/2022" },
      { customerName: "Thoma Dullingham", rating: 1, reviewDate: "2/13/2024" },
      { customerName: "Lucho Folan", rating: 5, reviewDate: "10/17/2020" },
      { customerName: "Tine Benasik", rating: 4, reviewDate: "1/5/2022" },
      { customerName: "Cherie Dyers", rating: 3, reviewDate: "12/25/2020" },
    ],
    size: [{ name: "S" }],
  },
  {
    id: 47,
    name: "Ms",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.",
    price: 9976.72,
    category: "Bandhani",
    brand: "Skinte",
    material: "Wool",
    color: [{ name: "Turquoise" }, { name: "Violet" }, { name: "Fuscia" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 28,
    reviews: [
      { customerName: "Karney Faughey", rating: 1, reviewDate: "9/22/2025" },
    ],
    size: [{ name: "XL" }],
  },
  {
    id: 48,
    name: "Ms",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    price: 13105.45,
    category: "Chanderi",
    brand: "Wikizz",
    material: "Silk",
    color: [
      { name: "Teal" },
      { name: "Goldenrod" },
      { name: "Red" },
      { name: "Khaki" },
      { name: "Violet" },
      { name: "Orange" },
    ],
    images: [{
      url:img3
    }],
    stock: 31,
    reviews: [
      { customerName: "Goldy McMearty", rating: 3, reviewDate: "5/4/2023" },
      { customerName: "Mortimer Kendred", rating: 1, reviewDate: "4/17/2021" },
      { customerName: "Lanna Flamank", rating: 4, reviewDate: "1/29/2025" },
      { customerName: "Wittie Searle", rating: 3, reviewDate: "7/11/2023" },
      { customerName: "Maryjo Hammell", rating: 3, reviewDate: "10/2/2023" },
    ],
    size: [{ name: "XL" }, { name: "XL" }, { name: "XL" }, { name: "XL" }],
  },
  {
    id: 49,
    name: "Mrs",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    price: 8046.87,
    category: "Paithani",
    brand: "BlogXS",
    material: "Chiffon",
    color: [
      { name: "Red" },
      { name: "Purple" },
      { name: "Turquoise" },
      { name: "Maroon" },
      { name: "Yellow" },
      { name: "Purple" },
      { name: "Pink" },
      { name: "Maroon" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 80,
    reviews: [
      { customerName: "Quinton McCamish", rating: 3, reviewDate: "3/7/2024" },
      { customerName: "Beret Fillary", rating: 3, reviewDate: "12/6/2024" },
      { customerName: "Eolanda McHugh", rating: 1, reviewDate: "7/24/2024" },
      { customerName: "Leonore Welden", rating: 5, reviewDate: "12/31/2023" },
      { customerName: "Danice Nulty", rating: 2, reviewDate: "8/22/2025" },
      { customerName: "Cathe Borrill", rating: 2, reviewDate: "2/14/2021" },
      { customerName: "Kirbie Porson", rating: 0, reviewDate: "8/6/2025" },
    ],
    size: [],
  },
  {
    id: 50,
    name: "Rev",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    price: 7739.68,
    category: "Kanchipuram",
    brand: "Latz",
    material: "Linen",
    color: [
      { name: "Puce" },
      { name: "Aquamarine" },
      { name: "Maroon" },
      { name: "Goldenrod" },
      { name: "Aquamarine" },
      { name: "Aquamarine" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 63,
    reviews: [
      { customerName: "Claudie Rigmond", rating: 3, reviewDate: "11/22/2023" },
      { customerName: "Inessa Jollands", rating: 4, reviewDate: "5/26/2024" },
      { customerName: "Monika Burger", rating: 0, reviewDate: "10/5/2022" },
      { customerName: "Joete Llewhellin", rating: 4, reviewDate: "10/2/2025" },
      { customerName: "Rafa Blazevic", rating: 3, reviewDate: "12/6/2024" },
    ],
    size: [{ name: "L" }],
  },
  {
    id: 51,
    name: "Honorable",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    price: 1695.73,
    category: "Chanderi",
    brand: "Tavu",
    material: "Silk",
    color: [
      { name: "Turquoise" },
      { name: "Indigo" },
      { name: "Purple" },
      { name: "Teal" },
      { name: "Green" },
      { name: "Goldenrod" },
      { name: "Aquamarine" },
      { name: "Yellow" },
      { name: "Teal" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 67,
    reviews: [],
    size: [{ name: "M" }, { name: "XXL" }, { name: "L" }, { name: "S" }],
  },
  {
    id: 52,
    name: "Dr",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    price: 3305.28,
    category: "Paithani",
    brand: "Zoovu",
    material: "Cotton",
    color: [{ name: "Maroon" }, { name: "Teal" }, { name: "Teal" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 12,
    reviews: [
      { customerName: "Merrel Wiz", rating: 3, reviewDate: "8/16/2025" },
      { customerName: "Tynan Swindlehurst", rating: 3, reviewDate: "3/2/2023" },
      { customerName: "Pris Andreasen", rating: 1, reviewDate: "12/25/2020" },
      { customerName: "Easter Salliss", rating: 4, reviewDate: "5/15/2024" },
      { customerName: "Baryram Cuttle", rating: 3, reviewDate: "3/24/2024" },
    ],
    size: [
      { name: "L" },
      { name: "L" },
      { name: "XL" },
      { name: "S" },
      { name: "XL" },
    ],
  },
  {
    id: 53,
    name: "Dr",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
    price: 131.26,
    category: "Bandhani",
    brand: "Blognation",
    material: "Wool",
    color: [{ name: "Khaki" }, { name: "Orange" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 53,
    reviews: [
      { customerName: "Randall Shieber", rating: 4, reviewDate: "4/20/2021" },
      { customerName: "Thoma Scoone", rating: 0, reviewDate: "1/28/2022" },
      { customerName: "Johan Coxhead", rating: 0, reviewDate: "11/6/2025" },
    ],
    size: [{ name: "L" }],
  },
  {
    id: 54,
    name: "Ms",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    price: 5178.66,
    category: "Gadwal",
    brand: "Livetube",
    material: "Linen",
    color: [
      { name: "Fuscia" },
      { name: "Aquamarine" },
      { name: "Khaki" },
      { name: "Turquoise" },
      { name: "Goldenrod" },
      { name: "Maroon" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 77,
    reviews: [
      { customerName: "Nada Arthan", rating: 4, reviewDate: "7/1/2025" },
      { customerName: "Juliann Charity", rating: 3, reviewDate: "1/2/2020" },
      { customerName: "Bryon Prati", rating: 4, reviewDate: "10/3/2021" },
      { customerName: "Kalina Morando", rating: 1, reviewDate: "9/2/2023" },
      { customerName: "Kittie Trymme", rating: 5, reviewDate: "12/8/2022" },
      { customerName: "Noel Mangon", rating: 3, reviewDate: "6/24/2022" },
      { customerName: "Marijo Mallock", rating: 1, reviewDate: "2/25/2021" },
      { customerName: "Fionna Cowderay", rating: 3, reviewDate: "2/21/2024" },
      { customerName: "Vanni Retallick", rating: 0, reviewDate: "8/9/2025" },
      {
        customerName: "Ignacius Dillimore",
        rating: 0,
        reviewDate: "9/25/2021",
      },
    ],
    size: [
      { name: "S" },
      { name: "L" },
      { name: "M" },
      { name: "L" },
      { name: "M" },
    ],
  },
  {
    id: 55,
    name: "Mr",
    description:
      "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    price: 4980.06,
    category: "Chanderi",
    brand: "Livefish",
    material: "Wool",
    color: [{ name: "Teal" }, { name: "Crimson" }, { name: "Purple" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 56,
    reviews: [
      { customerName: "Cecil Wyche", rating: 1, reviewDate: "1/11/2020" },
      { customerName: "Celestyna Jerke", rating: 5, reviewDate: "6/29/2025" },
    ],
    size: [{ name: "L" }],
  },
  {
    id: 56,
    name: "Honorable",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    price: 10505.06,
    category: "Gadwal",
    brand: "Browseblab",
    material: "Silk",
    color: [{ name: "Puce" }, { name: "Khaki" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 85,
    reviews: [
      { customerName: "Aila Coulthard", rating: 5, reviewDate: "10/9/2020" },
      { customerName: "Devlin Morphey", rating: 2, reviewDate: "5/18/2020" },
      { customerName: "Avrom Girdler", rating: 5, reviewDate: "4/25/2022" },
      { customerName: "Brianna Hum", rating: 3, reviewDate: "6/1/2020" },
      { customerName: "Moises Fraser", rating: 3, reviewDate: "11/12/2024" },
      { customerName: "Vikky Pritchett", rating: 1, reviewDate: "7/30/2021" },
      { customerName: "Wendi Raine", rating: 4, reviewDate: "3/17/2022" },
      { customerName: "Karel Bennen", rating: 4, reviewDate: "9/11/2022" },
      { customerName: "Ardeen Covelle", rating: 0, reviewDate: "9/22/2024" },
    ],
    size: [{ name: "M" }, { name: "XL" }, { name: "S" }],
  },
  {
    id: 57,
    name: "Rev",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    price: 13507.12,
    category: "Pochampally",
    brand: "Demimbu",
    material: "Silk",
    color: [
      { name: "Turquoise" },
      { name: "Maroon" },
      { name: "Fuscia" },
      { name: "Crimson" },
      { name: "Fuscia" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 1,
    reviews: [
      { customerName: "Ana Pirkis", rating: 3, reviewDate: "12/1/2023" },
      { customerName: "Lloyd Larvent", rating: 0, reviewDate: "2/28/2020" },
      { customerName: "Lesly Crocombe", rating: 1, reviewDate: "8/13/2025" },
      { customerName: "Miguela Hills", rating: 5, reviewDate: "7/25/2025" },
      { customerName: "Ogdan Checci", rating: 3, reviewDate: "7/2/2020" },
      { customerName: "Alleen Caroll", rating: 3, reviewDate: "1/11/2021" },
    ],
    size: [],
  },
  {
    id: 58,
    name: "Mrs",
    description:
      "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    price: 19856.31,
    category: "Banarasi",
    brand: "Blogtag",
    material: "Wool",
    color: [
      { name: "Goldenrod" },
      { name: "Fuscia" },
      { name: "Red" },
      { name: "Goldenrod" },
      { name: "Teal" },
      { name: "Yellow" },
      { name: "Red" },
      { name: "Orange" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 39,
    reviews: [
      {
        customerName: "Carol-jean Snozzwell",
        rating: 4,
        reviewDate: "12/24/2023",
      },
      { customerName: "Kilian Aronovich", rating: 2, reviewDate: "1/31/2023" },
    ],
    size: [{ name: "XL" }, { name: "S" }, { name: "XL" }, { name: "XXL" }],
  },
  {
    id: 59,
    name: "Rev",
    description:
      "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    price: 671.91,
    category: "Pochampally",
    brand: "Quatz",
    material: "Net",
    color: [
      { name: "Puce" },
      { name: "Mauv" },
      { name: "Mauv" },
      { name: "Teal" },
      { name: "Mauv" },
      { name: "Red" },
      { name: "Yellow" },
      { name: "Teal" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 96,
    reviews: [
      { customerName: "Raven Stallion", rating: 4, reviewDate: "6/1/2023" },
      { customerName: "Vania Kornyshev", rating: 2, reviewDate: "9/7/2025" },
      { customerName: "Cesaro Sempill", rating: 4, reviewDate: "1/11/2023" },
      { customerName: "Janek Bradwell", rating: 4, reviewDate: "1/31/2023" },
      { customerName: "Lyda Jurewicz", rating: 4, reviewDate: "6/23/2025" },
      { customerName: "Carroll Mawne", rating: 5, reviewDate: "12/2/2020" },
    ],
    size: [
      { name: "M" },
      { name: "M" },
      { name: "XXL" },
      { name: "M" },
      { name: "L" },
    ],
  },
  {
    id: 60,
    name: "Dr",
    description:
      "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.\n\nProin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    price: 6135.67,
    category: "Chanderi",
    brand: "Mynte",
    material: "Wool",
    color: [
      { name: "Purple" },
      { name: "Indigo" },
      { name: "Fuscia" },
      { name: "Khaki" },
      { name: "Pink" },
      { name: "Blue" },
      { name: "Turquoise" },
      { name: "Khaki" },
      { name: "Purple" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 2,
    reviews: [
      { customerName: "Cami Obell", rating: 1, reviewDate: "5/3/2020" },
      { customerName: "Hildegarde Adamov", rating: 4, reviewDate: "6/28/2024" },
      { customerName: "Abbey Klaffs", rating: 2, reviewDate: "11/17/2023" },
      { customerName: "Deck Biaggetti", rating: 2, reviewDate: "1/12/2021" },
    ],
    size: [{ name: "XXL" }],
  },
  {
    id: 61,
    name: "Dr",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    price: 1034.75,
    category: "Pochampally",
    brand: "Gabvine",
    material: "Georgette",
    color: [
      { name: "Pink" },
      { name: "Indigo" },
      { name: "Fuscia" },
      { name: "Violet" },
      { name: "Fuscia" },
      { name: "Blue" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 81,
    reviews: [
      { customerName: "Elfreda Hammatt", rating: 2, reviewDate: "12/31/2021" },
      { customerName: "Hamid Parysiak", rating: 0, reviewDate: "9/8/2020" },
      { customerName: "Zelig Iltchev", rating: 4, reviewDate: "10/21/2020" },
      { customerName: "Morganne Gatlin", rating: 3, reviewDate: "1/18/2023" },
      {
        customerName: "Claudia Leppington",
        rating: 0,
        reviewDate: "11/22/2021",
      },
      { customerName: "Hermy Harhoff", rating: 1, reviewDate: "12/27/2022" },
      { customerName: "Yulma Smalley", rating: 4, reviewDate: "3/11/2020" },
      { customerName: "Francisco Macro", rating: 5, reviewDate: "9/9/2024" },
      {
        customerName: "Audra Rosenberger",
        rating: 1,
        reviewDate: "12/17/2025",
      },
    ],
    size: [{ name: "L" }, { name: "L" }, { name: "L" }],
  },
  {
    id: 62,
    name: "Mrs",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
    price: 6502.32,
    category: "Gadwal",
    brand: "Katz",
    material: "Linen",
    color: [
      { name: "Green" },
      { name: "Blue" },
      { name: "Violet" },
      { name: "Purple" },
      { name: "Mauv" },
      { name: "Teal" },
      { name: "Puce" },
      { name: "Puce" },
      { name: "Purple" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 14,
    reviews: [],
    size: [
      { name: "XXL" },
      { name: "XXL" },
      { name: "L" },
      { name: "S" },
      { name: "XXL" },
    ],
  },
  {
    id: 63,
    name: "Dr",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    price: 16435.88,
    category: "Banarasi",
    brand: "Mydo",
    material: "Georgette",
    color: [
      { name: "Aquamarine" },
      { name: "Red" },
      { name: "Turquoise" },
      { name: "Crimson" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      { url: img1 },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 15,
    reviews: [
      { customerName: "Christin Dismore", rating: 0, reviewDate: "12/17/2023" },
      { customerName: "Delmer Denisot", rating: 1, reviewDate: "3/22/2023" },
      {
        customerName: "Emelina McTurlough",
        rating: 1,
        reviewDate: "9/20/2021",
      },
      { customerName: "Avis McInility", rating: 4, reviewDate: "12/25/2021" },
      { customerName: "Vicki Bragg", rating: 1, reviewDate: "9/7/2023" },
      { customerName: "Cherilynn Siverns", rating: 1, reviewDate: "9/26/2023" },
      { customerName: "Walther Rigate", rating: 0, reviewDate: "1/15/2022" },
    ],
    size: [],
  },
  {
    id: 64,
    name: "Dr",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
    price: 5327.71,
    category: "Paithani",
    brand: "Aimbo",
    material: "Wool",
    color: [
      { name: "Blue" },
      { name: "Crimson" },
      { name: "Red" },
      { name: "Mauv" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 25,
    reviews: [
      { customerName: "Hestia Worgan", rating: 0, reviewDate: "9/13/2023" },
      { customerName: "Coop Loftie", rating: 4, reviewDate: "7/7/2024" },
    ],
    size: [{ name: "L" }],
  },
  {
    id: 65,
    name: "Honorable",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    price: 706.1,
    category: "Bandhani",
    brand: "Kanoodle",
    material: "Georgette",
    color: [
      { name: "Mauv" },
      { name: "Purple" },
      { name: "Red" },
      { name: "Green" },
      { name: "Maroon" },
      { name: "Mauv" },
      { name: "Indigo" },
      { name: "Puce" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 49,
    reviews: [
      {
        customerName: "Albertina Temperton",
        rating: 2,
        reviewDate: "5/22/2023",
      },
      { customerName: "Alena Origin", rating: 0, reviewDate: "3/21/2022" },
    ],
    size: [],
  },
  {
    id: 66,
    name: "Dr",
    description:
      "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    price: 12499.45,
    category: "Kanchipuram",
    brand: "Trupe",
    material: "Chiffon",
    color: [
      { name: "Green" },
      { name: "Purple" },
      { name: "Green" },
      { name: "Mauv" },
      { name: "Fuscia" },
      { name: "Blue" },
      { name: "Yellow" },
      { name: "Turquoise" },
      { name: "Maroon" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 59,
    reviews: [
      { customerName: "Dulcie Panniers", rating: 3, reviewDate: "4/15/2020" },
      {
        customerName: "Victoria Hendrickx",
        rating: 2,
        reviewDate: "5/29/2021",
      },
      { customerName: "Tab Baccus", rating: 2, reviewDate: "4/29/2021" },
      { customerName: "Janeen Wheatley", rating: 2, reviewDate: "10/5/2022" },
      { customerName: "Dominique Fardoe", rating: 3, reviewDate: "4/4/2024" },
      { customerName: "Miof mela Danes", rating: 0, reviewDate: "9/14/2023" },
    ],
    size: [{ name: "L" }, { name: "M" }, { name: "XXL" }],
  },
  {
    id: 67,
    name: "Mrs",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
    price: 18525.77,
    category: "Kanchipuram",
    brand: "Midel",
    material: "Silk",
    color: [
      { name: "Fuscia" },
      { name: "Teal" },
      { name: "Goldenrod" },
      { name: "Maroon" },
      { name: "Maroon" },
      { name: "Indigo" },
      { name: "Puce" },
      { name: "Fuscia" },
      { name: "Khaki" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 47,
    reviews: [
      { customerName: "Constantin Chell", rating: 0, reviewDate: "8/11/2023" },
      { customerName: "Maighdiln Bleby", rating: 5, reviewDate: "1/27/2025" },
      { customerName: "Iosep Sate", rating: 5, reviewDate: "12/15/2021" },
    ],
    size: [{ name: "XL" }],
  },
  {
    id: 68,
    name: "Rev",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    price: 1053.77,
    category: "Paithani",
    brand: "Brightbean",
    material: "Linen",
    color: [
      { name: "Fuscia" },
      { name: "Mauv" },
      { name: "Puce" },
      { name: "Pink" },
      { name: "Aquamarine" },
      { name: "Purple" },
      { name: "Fuscia" },
    ],
    images: [
      { url: img1 },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 86,
    reviews: [
      { customerName: "Elisa Brizland", rating: 3, reviewDate: "10/25/2024" },
      { customerName: "Olive Curror", rating: 5, reviewDate: "10/7/2022" },
    ],
    size: [
      { name: "XL" },
      { name: "S" },
      { name: "L" },
      { name: "XL" },
      { name: "XXL" },
    ],
  },
  {
    id: 69,
    name: "Dr",
    description:
      "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    price: 8786.49,
    category: "Banarasi",
    brand: "Nlounge",
    material: "Wool",
    color: [{ name: "Blue" }, { name: "Aquamarine" }, { name: "Teal" }],
    images: [{
      url:img4
    }],
    stock: 49,
    reviews: [
      { customerName: "Carny Lillicrap", rating: 2, reviewDate: "4/28/2025" },
      { customerName: "Cora Scyone", rating: 2, reviewDate: "10/4/2021" },
    ],
    size: [{ name: "XL" }, { name: "XXL" }, { name: "XL" }, { name: "M" }],
  },
  {
    id: 70,
    name: "Dr",
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    price: 2016.65,
    category: "Kanchipuram",
    brand: "Skippad",
    material: "Silk",
    color: [
      { name: "Indigo" },
      { name: "Turquoise" },
      { name: "Green" },
      { name: "Crimson" },
      { name: "Maroon" },
      { name: "Orange" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 69,
    reviews: [
      { customerName: "Maire Arnke", rating: 0, reviewDate: "9/29/2023" },
      { customerName: "Cathryn Shier", rating: 4, reviewDate: "7/19/2024" },
      { customerName: "Ashli Fillary", rating: 1, reviewDate: "2/17/2024" },
      { customerName: "Nestor Jans", rating: 3, reviewDate: "4/10/2022" },
      { customerName: "Ariel Povah", rating: 3, reviewDate: "1/19/2023" },
      { customerName: "Eva Beloe", rating: 5, reviewDate: "10/25/2021" },
      { customerName: "Rodger Lamborne", rating: 1, reviewDate: "8/3/2021" },
      { customerName: "Deva Billsberry", rating: 2, reviewDate: "10/2/2023" },
      {
        customerName: "Marie-jeanne Aguirre",
        rating: 2,
        reviewDate: "10/26/2020",
      },
    ],
    size: [{ name: "M" }],
  },
  {
    id: 71,
    name: "Dr",
    description:
      "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    price: 4678.61,
    category: "Banarasi",
    brand: "Voolith",
    material: "Net",
    color: [{ name: "Purple" }],
    images: [
      {
        url: img1,
      },
    ],
    stock: 0,
    reviews: [
      { customerName: "Vina Willmetts", rating: 0, reviewDate: "12/29/2020" },
      { customerName: "Neall Scawton", rating: 5, reviewDate: "8/27/2023" },
    ],
    size: [
      { name: "XXL" },
      { name: "M" },
      { name: "L" },
      { name: "M" },
      { name: "L" },
    ],
  },
  {
    id: 72,
    name: "Dr",
    description:
      "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    price: 6165.24,
    category: "Pochampally",
    brand: "Thoughtbeat",
    material: "Wool",
    color: [
      { name: "Teal" },
      { name: "Purple" },
      { name: "Turquoise" },
      { name: "Yellow" },
      { name: "Goldenrod" },
      { name: "Pink" },
      { name: "Blue" },
      { name: "Goldenrod" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 18,
    reviews: [
      { customerName: "Tonie Singyard", rating: 2, reviewDate: "2/17/2021" },
    ],
    size: [],
  },
  {
    id: 73,
    name: "Rev",
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    price: 13871.69,
    category: "Gadwal",
    brand: "Flashset",
    material: "Net",
    color: [
      { name: "Goldenrod" },
      { name: "Orange" },
      { name: "Goldenrod" },
      { name: "Aquamarine" },
      { name: "Puce" },
      { name: "Violet" },
    ],
    images: [
      {
        url: img1,
      },
    ],
    stock: 57,
    reviews: [
      { customerName: "Salomo Greenan", rating: 1, reviewDate: "5/19/2021" },
      { customerName: "Britte Boustead", rating: 5, reviewDate: "1/18/2024" },
      { customerName: "Ellie Curtiss", rating: 5, reviewDate: "8/25/2020" },
      { customerName: "Jodi Greenhouse", rating: 5, reviewDate: "1/28/2025" },
      { customerName: "Karol Lyddiard", rating: 1, reviewDate: "2/18/2021" },
      { customerName: "Cherish Cruce", rating: 2, reviewDate: "3/20/2022" },
    ],
    size: [{ name: "XL" }, { name: "XXL" }, { name: "XL" }],
  },
  {
    id: 74,
    name: "Honorable",
    description:
      "Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
    price: 12317.03,
    category: "Bandhani",
    brand: "Roodel",
    material: "Wool",
    color: [],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 95,
    reviews: [
      { customerName: "Frederico Wheal", rating: 1, reviewDate: "11/10/2025" },
      { customerName: "Theresa MacKay", rating: 1, reviewDate: "8/6/2025" },
      { customerName: "Celinka Clarkin", rating: 4, reviewDate: "6/16/2023" },
      { customerName: "Beau Legg", rating: 5, reviewDate: "3/5/2023" },
      { customerName: "Dunn Spellacy", rating: 2, reviewDate: "8/13/2023" },
      { customerName: "Abagael Curless", rating: 5, reviewDate: "3/13/2023" },
      { customerName: "Tito Crafter", rating: 1, reviewDate: "12/22/2020" },
      { customerName: "Monty Zoephel", rating: 4, reviewDate: "2/15/2020" },
    ],
    size: [],
  },
  {
    id: 75,
    name: "Ms",
    description:
      "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    price: 13560.34,
    category: "Gadwal",
    brand: "Twimm",
    material: "Linen",
    color: [
      { name: "Turquoise" },
      { name: "Goldenrod" },
      { name: "Violet" },
      { name: "Crimson" },
      { name: "Puce" },
      { name: "Blue" },
      { name: "Blue" },
      { name: "Pink" },
    ],
    images: [{
      url:img2
    }],
    stock: 2,
    reviews: [
      { customerName: "Forester Haydn", rating: 2, reviewDate: "12/30/2025" },
      { customerName: "Caril Francesconi", rating: 5, reviewDate: "6/18/2025" },
      { customerName: "Cori Dew", rating: 3, reviewDate: "4/9/2021" },
      { customerName: "Julia Mallabone", rating: 2, reviewDate: "1/19/2021" },
    ],
    size: [{ name: "XXL" }, { name: "XL" }],
  },
  {
    id: 76,
    name: "Mr",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    price: 19638.49,
    category: "Chanderi",
    brand: "Tavu",
    material: "Chiffon",
    color: [
      { name: "Red" },
      { name: "Teal" },
      { name: "Fuscia" },
      { name: "Blue" },
      { name: "Blue" },
      { name: "Khaki" },
      { name: "Aquamarine" },
      { name: "Khaki" },
      { name: "Fuscia" },
      { name: "Indigo" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 21,
    reviews: [
      { customerName: "Hubie Peinton", rating: 2, reviewDate: "5/30/2023" },
      {
        customerName: "Kimberlyn Atterbury",
        rating: 2,
        reviewDate: "6/12/2024",
      },
      { customerName: "Clemens Courtois", rating: 2, reviewDate: "12/31/2021" },
      { customerName: "Joanna Speer", rating: 0, reviewDate: "4/15/2022" },
      { customerName: "Lindy Friskey", rating: 4, reviewDate: "2/7/2023" },
      { customerName: "Hilly Franzewitch", rating: 5, reviewDate: "9/2/2023" },
      { customerName: "Montgomery June", rating: 2, reviewDate: "10/19/2025" },
    ],
    size: [{ name: "XXL" }, { name: "M" }, { name: "XXL" }],
  },
  {
    id: 77,
    name: "Rev",
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    price: 907.33,
    category: "Banarasi",
    brand: "Youspan",
    material: "Silk",
    color: [
      { name: "Purple" },
      { name: "Mauv" },
      { name: "Yellow" },
      { name: "Maroon" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 39,
    reviews: [
      { customerName: "Christophe Heeney", rating: 1, reviewDate: "1/6/2020" },
      {
        customerName: "Christabel Tidbold",
        rating: 1,
        reviewDate: "10/15/2025",
      },
      { customerName: "Jandy Capron", rating: 0, reviewDate: "7/26/2021" },
      { customerName: "Jacquelin Perelli", rating: 5, reviewDate: "2/20/2022" },
      { customerName: "Cherie Glazyer", rating: 3, reviewDate: "9/30/2025" },
      { customerName: "Rana Larmett", rating: 5, reviewDate: "8/9/2024" },
      { customerName: "Mel Hendriksen", rating: 2, reviewDate: "12/30/2024" },
      { customerName: "Drake Ramos", rating: 5, reviewDate: "7/18/2021" },
    ],
    size: [{ name: "S" }, { name: "XL" }, { name: "S" }, { name: "L" }],
  },
  {
    id: 78,
    name: "Rev",
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
    price: 6750.98,
    category: "Pochampally",
    brand: "Zoomzone",
    material: "Wool",
    color: [
      { name: "Red" },
      { name: "Aquamarine" },
      { name: "Maroon" },
      { name: "Violet" },
      { name: "Teal" },
      { name: "Indigo" },
      { name: "Teal" },
      { name: "Violet" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 40,
    reviews: [
      { customerName: "Zachary Gauchier", rating: 5, reviewDate: "2/7/2025" },
      { customerName: "Pat Malt", rating: 5, reviewDate: "4/19/2023" },
      { customerName: "Judon Flood", rating: 5, reviewDate: "8/25/2020" },
      { customerName: "Nanete Shillaker", rating: 4, reviewDate: "11/1/2021" },
      { customerName: "Aleece Bloxholm", rating: 3, reviewDate: "8/12/2020" },
    ],
    size: [],
  },
  {
    id: 79,
    name: "Mr",
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    price: 7508.92,
    category: "Paithani",
    brand: "Voolia",
    material: "Silk",
    color: [{ name: "Mauv" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 81,
    reviews: [
      { customerName: "Valera Loosley", rating: 0, reviewDate: "5/4/2024" },
      { customerName: "Lannie Fontaine", rating: 1, reviewDate: "5/4/2020" },
    ],
    size: [{ name: "XL" }, { name: "XXL" }, { name: "S" }, { name: "XXL" }],
  },
  {
    id: 80,
    name: "Mr",
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.\n\nAenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.",
    price: 8484.01,
    category: "Chanderi",
    brand: "Twimm",
    material: "Wool",
    color: [
      { name: "Indigo" },
      { name: "Mauv" },
      { name: "Teal" },
      { name: "Blue" },
    ],
    images: [
      {
        url: img1,
      },
    ],
    stock: 94,
    reviews: [
      { customerName: "Katleen Offen", rating: 2, reviewDate: "6/2/2020" },
      { customerName: "Sayre Mutter", rating: 2, reviewDate: "12/11/2025" },
      { customerName: "Astra Vannini", rating: 0, reviewDate: "9/10/2025" },
      {
        customerName: "Corrianne Mitchiner",
        rating: 1,
        reviewDate: "12/13/2023",
      },
      { customerName: "Kippy Ahlin", rating: 2, reviewDate: "10/12/2022" },
      { customerName: "Katy Reely", rating: 5, reviewDate: "1/20/2024" },
      { customerName: "Jeanette Duke", rating: 2, reviewDate: "2/19/2020" },
      { customerName: "Consolata Ofener", rating: 5, reviewDate: "6/17/2025" },
      { customerName: "Star Galiford", rating: 1, reviewDate: "11/17/2025" },
      { customerName: "Ulrich Goulding", rating: 3, reviewDate: "11/11/2023" },
    ],
    size: [{ name: "L" }, { name: "XXL" }, { name: "M" }],
  },
  {
    id: 81,
    name: "Dr",
    description:
      "Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.",
    price: 12609.79,
    category: "Banarasi",
    brand: "Ooba",
    material: "Silk",
    color: [{ name: "Blue" }, { name: "Pink" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 26,
    reviews: [
      { customerName: "Blane Brecknell", rating: 0, reviewDate: "1/14/2020" },
      { customerName: "Northrup McNeely", rating: 3, reviewDate: "9/5/2023" },
      { customerName: "Isabella Mustard", rating: 2, reviewDate: "8/19/2024" },
      { customerName: "Scott Sowerbutts", rating: 4, reviewDate: "2/7/2024" },
      { customerName: "Dennison Karlsen", rating: 3, reviewDate: "7/8/2024" },
      { customerName: "Ennis Cosyns", rating: 1, reviewDate: "1/21/2025" },
      { customerName: "Jeffrey Skirrow", rating: 0, reviewDate: "6/3/2023" },
      { customerName: "Britt Lamers", rating: 1, reviewDate: "2/20/2023" },
      { customerName: "Erich Semple", rating: 4, reviewDate: "1/16/2025" },
    ],
    size: [{ name: "M" }, { name: "XL" }, { name: "XXL" }],
  },
  {
    id: 82,
    name: "Mrs",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    price: 1364.76,
    category: "Kanchipuram",
    brand: "Brainsphere",
    material: "Wool",
    color: [{ name: "Teal" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 10,
    reviews: [],
    size: [],
  },
  {
    id: 83,
    name: "Ms",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.\n\nProin eu mi. Nulla ac enim. In tempor, turpis nec euismod scelerisque, quam turpis adipiscing lorem, vitae mattis nibh ligula nec sem.\n\nDuis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.",
    price: 13762.83,
    category: "Bandhani",
    brand: "Shuffledrive",
    material: "Linen",
    color: [
      { name: "Puce" },
      { name: "Puce" },
      { name: "Indigo" },
      { name: "Yellow" },
      { name: "Purple" },
      { name: "Violet" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 75,
    reviews: [
      { customerName: "Leontine Brough", rating: 4, reviewDate: "1/3/2020" },
    ],
    size: [{ name: "XL" }, { name: "M" }, { name: "XXL" }],
  },
  {
    id: 84,
    name: "Ms",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    price: 17370.82,
    category: "Bandhani",
    brand: "Meeveo",
    material: "Net",
    color: [{ name: "Yellow" }, { name: "Pink" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 42,
    reviews: [
      { customerName: "Stern Kolakowski", rating: 2, reviewDate: "12/22/2024" },
      { customerName: "Aggi Parradice", rating: 5, reviewDate: "2/5/2022" },
      {
        customerName: "Christophe O'Keevan",
        rating: 2,
        reviewDate: "10/11/2021",
      },
      { customerName: "Claiborn Doherty", rating: 1, reviewDate: "3/6/2025" },
      { customerName: "Michaella Corry", rating: 4, reviewDate: "12/20/2025" },
      { customerName: "Alvera Coan", rating: 0, reviewDate: "4/7/2025" },
      { customerName: "Hunter Chatband", rating: 1, reviewDate: "5/10/2021" },
    ],
    size: [{ name: "L" }, { name: "S" }],
  },
  {
    id: 85,
    name: "Mr",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 18902.68,
    category: "Banarasi",
    brand: "Browsebug",
    material: "Wool",
    color: [
      { name: "Crimson" },
      { name: "Maroon" },
      { name: "Maroon" },
      { name: "Maroon" },
      { name: "Aquamarine" },
      { name: "Khaki" },
      { name: "Puce" },
    ],
    images: [
      {
        url: img1,
      },
    ],
    stock: 55,
    reviews: [
      { customerName: "Hermine Wooland", rating: 0, reviewDate: "2/1/2022" },
      { customerName: "Granville Upston", rating: 3, reviewDate: "5/29/2020" },
      { customerName: "Hersh Chapell", rating: 2, reviewDate: "7/28/2025" },
      { customerName: "Gerta McDermott", rating: 4, reviewDate: "11/18/2022" },
      { customerName: "Gene McCoughan", rating: 3, reviewDate: "2/3/2020" },
      { customerName: "Corey Wynrahame", rating: 4, reviewDate: "9/17/2023" },
      { customerName: "Even Bengal", rating: 0, reviewDate: "4/30/2025" },
      { customerName: "Arturo O'Keenan", rating: 2, reviewDate: "9/3/2021" },
      { customerName: "Rafaello Renison", rating: 4, reviewDate: "7/25/2023" },
    ],
    size: [{ name: "XL" }, { name: "S" }],
  },
  {
    id: 86,
    name: "Honorable",
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    price: 17823.39,
    category: "Banarasi",
    brand: "Rhyloo",
    material: "Chiffon",
    color: [
      { name: "Maroon" },
      { name: "Orange" },
      { name: "Yellow" },
      { name: "Red" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 49,
    reviews: [
      { customerName: "Dene Bidewell", rating: 5, reviewDate: "10/4/2020" },
      { customerName: "Flin Densell", rating: 3, reviewDate: "5/8/2021" },
      { customerName: "Erek Spurriar", rating: 5, reviewDate: "4/28/2022" },
      {
        customerName: "Ammamaria Pimerick",
        rating: 2,
        reviewDate: "1/22/2025",
      },
      { customerName: "Melina Ruff", rating: 3, reviewDate: "6/18/2024" },
      { customerName: "Padraig Rosthorn", rating: 2, reviewDate: "11/4/2023" },
      { customerName: "Wenonah Mccaull", rating: 1, reviewDate: "2/7/2024" },
    ],
    size: [
      { name: "XXL" },
      { name: "L" },
      { name: "XXL" },
      { name: "S" },
      { name: "XXL" },
    ],
  },
  {
    id: 87,
    name: "Rev",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.\n\nIn sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
    price: 3407.27,
    category: "Banarasi",
    brand: "Reallinks",
    material: "Wool",
    color: [
      { name: "Blue" },
      { name: "Orange" },
      { name: "Maroon" },
      { name: "Red" },
      { name: "Pink" },
      { name: "Fuscia" },
      { name: "Pink" },
      { name: "Blue" },
      { name: "Fuscia" },
      { name: "Maroon" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 55,
    reviews: [
      { customerName: "Kat Paulus", rating: 2, reviewDate: "6/2/2025" },
      { customerName: "Kipp Streatley", rating: 5, reviewDate: "3/1/2023" },
      { customerName: "Ripley Buffin", rating: 4, reviewDate: "1/11/2025" },
      { customerName: "Ric Di Meo", rating: 3, reviewDate: "4/8/2022" },
      { customerName: "Shanie Searight", rating: 5, reviewDate: "3/9/2020" },
      { customerName: "Mitchel Kohlert", rating: 4, reviewDate: "6/20/2020" },
    ],
    size: [{ name: "M" }, { name: "XL" }, { name: "M" }],
  },
  {
    id: 88,
    name: "Ms",
    description:
      "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
    price: 8548.0,
    category: "Gadwal",
    brand: "Brightbean",
    material: "Net",
    color: [
      { name: "Puce" },
      { name: "Teal" },
      { name: "Yellow" },
      { name: "Fuscia" },
      { name: "Pink" },
      { name: "Teal" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 63,
    reviews: [
      { customerName: "Gwen Vanini", rating: 1, reviewDate: "11/1/2023" },
      { customerName: "Hillary Medeway", rating: 3, reviewDate: "10/16/2024" },
      { customerName: "Merry Jeste", rating: 4, reviewDate: "9/6/2021" },
      { customerName: "Joanne McOrkill", rating: 0, reviewDate: "2/27/2020" },
      {
        customerName: "Kendricks Scholler",
        rating: 2,
        reviewDate: "9/28/2020",
      },
      { customerName: "Myrna Herries", rating: 4, reviewDate: "1/28/2021" },
      { customerName: "Diana Hassekl", rating: 3, reviewDate: "8/15/2024" },
      { customerName: "Burk Orrett", rating: 5, reviewDate: "5/22/2021" },
    ],
    size: [{ name: "S" }],
  },
  {
    id: 89,
    name: "Dr",
    description:
      "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    price: 19066.3,
    category: "Bandhani",
    brand: "Skaboo",
    material: "Silk",
    color: [
      { name: "Turquoise" },
      { name: "Mauv" },
      { name: "Purple" },
      { name: "Indigo" },
      { name: "Goldenrod" },
    ],
    images: [
      {
        url: img1,
      },
    ],
    stock: 9,
    reviews: [
      { customerName: "Thekla Croston", rating: 0, reviewDate: "3/16/2020" },
      { customerName: "Rock Mc Caghan", rating: 3, reviewDate: "10/4/2025" },
      { customerName: "Perkin Drinkhill", rating: 2, reviewDate: "2/27/2024" },
      { customerName: "Amby Goatman", rating: 4, reviewDate: "12/20/2024" },
      { customerName: "Garvey Mc Pake", rating: 2, reviewDate: "3/2/2025" },
      { customerName: "Kaia Canas", rating: 3, reviewDate: "10/7/2022" },
      {
        customerName: "Rolland Bottlestone",
        rating: 5,
        reviewDate: "9/29/2022",
      },
    ],
    size: [{ name: "S" }, { name: "XL" }, { name: "S" }, { name: "XXL" }],
  },
  {
    id: 90,
    name: "Honorable",
    description:
      "In congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
    price: 11006.33,
    category: "Kanchipuram",
    brand: "Twitterbeat",
    material: "Silk",
    color: [{ name: "Green" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 98,
    reviews: [
      { customerName: "Liv Daniellot", rating: 0, reviewDate: "1/27/2025" },
      { customerName: "Nevsa Frediani", rating: 5, reviewDate: "7/29/2020" },
      { customerName: "Paddie Bahia", rating: 4, reviewDate: "6/17/2022" },
      { customerName: "Florida O'Lyhane", rating: 0, reviewDate: "10/3/2023" },
      { customerName: "Jarrod Perotti", rating: 2, reviewDate: "7/6/2025" },
    ],
    size: [
      { name: "M" },
      { name: "M" },
      { name: "XL" },
      { name: "M" },
      { name: "XXL" },
    ],
  },
  {
    id: 91,
    name: "Mr",
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    price: 18566.6,
    category: "Pochampally",
    brand: "Kwinu",
    material: "Wool",
    color: [
      { name: "Orange" },
      { name: "Puce" },
      { name: "Blue" },
      { name: "Puce" },
      { name: "Purple" },
      { name: "Orange" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 52,
    reviews: [
      { customerName: "Orel Armer", rating: 5, reviewDate: "5/13/2021" },
      { customerName: "Erina Dutnall", rating: 0, reviewDate: "7/1/2023" },
      { customerName: "Charil Dugan", rating: 3, reviewDate: "5/31/2022" },
      { customerName: "Spenser Thorneley", rating: 2, reviewDate: "7/11/2022" },
      { customerName: "Jade Simonazzi", rating: 3, reviewDate: "10/13/2022" },
      {
        customerName: "Seymour Rosentholer",
        rating: 0,
        reviewDate: "11/24/2023",
      },
      { customerName: "Letti Softley", rating: 0, reviewDate: "6/5/2021" },
      { customerName: "Weber Cudbertson", rating: 4, reviewDate: "5/14/2023" },
    ],
    size: [{ name: "M" }, { name: "L" }, { name: "S" }],
  },
  {
    id: 92,
    name: "Dr",
    description:
      "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    price: 545.01,
    category: "Gadwal",
    brand: "Vinder",
    material: "Wool",
    color: [{ name: "Turquoise" }, { name: "Aquamarine" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 29,
    reviews: [
      { customerName: "Ethelbert Elnor", rating: 3, reviewDate: "11/18/2022" },
      { customerName: "Maurise McKeown", rating: 1, reviewDate: "5/19/2025" },
      { customerName: "Arleyne Amis", rating: 3, reviewDate: "12/7/2022" },
      { customerName: "Susi Towersey", rating: 5, reviewDate: "5/4/2022" },
      { customerName: "Darcy McAndie", rating: 1, reviewDate: "11/13/2020" },
      { customerName: "Earl Buckhurst", rating: 1, reviewDate: "4/16/2024" },
      { customerName: "Mimi Ivic", rating: 0, reviewDate: "3/6/2022" },
      { customerName: "Rustie Bigham", rating: 3, reviewDate: "7/21/2020" },
      { customerName: "Delinda Froom", rating: 5, reviewDate: "11/14/2022" },
    ],
    size: [],
  },
  {
    id: 93,
    name: "Dr",
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    price: 3074.88,
    category: "Bandhani",
    brand: "Riffpath",
    material: "Wool",
    color: [],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 27,
    reviews: [
      { customerName: "Jonas Sheach", rating: 0, reviewDate: "2/17/2020" },
      { customerName: "Gaven Shillam", rating: 4, reviewDate: "6/13/2020" },
      {
        customerName: "Isidore Rosenfelder",
        rating: 2,
        reviewDate: "3/31/2024",
      },
      { customerName: "Elicia Twiddell", rating: 5, reviewDate: "8/18/2023" },
      { customerName: "Gwenette Piolli", rating: 2, reviewDate: "4/22/2025" },
      { customerName: "Anneliese Divers", rating: 4, reviewDate: "3/18/2021" },
      { customerName: "Reggi Mathew", rating: 0, reviewDate: "7/15/2024" },
      { customerName: "Damian Keyworth", rating: 1, reviewDate: "9/13/2020" },
      { customerName: "Bernhard Danhel", rating: 0, reviewDate: "7/17/2024" },
    ],
    size: [{ name: "S" }],
  },
  {
    id: 94,
    name: "Rev",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    price: 19019.83,
    category: "Bandhani",
    brand: "Riffpedia",
    material: "Linen",
    color: [{ name: "Fuscia" }, { name: "Khaki" }, { name: "Fuscia" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 51,
    reviews: [
      { customerName: "Luther Tudball", rating: 5, reviewDate: "3/23/2023" },
      { customerName: "Cordie Knoton", rating: 1, reviewDate: "9/11/2024" },
      { customerName: "Bryn Fetteplace", rating: 5, reviewDate: "7/23/2023" },
      { customerName: "Glenna Ropkins", rating: 2, reviewDate: "6/13/2023" },
      { customerName: "Torrie Fleming", rating: 4, reviewDate: "5/24/2022" },
      { customerName: "Hamnet Dublin", rating: 4, reviewDate: "6/19/2024" },
      { customerName: "Batsheva Lumly", rating: 0, reviewDate: "8/31/2022" },
    ],
    size: [{ name: "S" }, { name: "L" }],
  },
  {
    id: 95,
    name: "Honorable",
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.",
    price: 5674.96,
    category: "Gadwal",
    brand: "Jamia",
    material: "Linen",
    color: [
      { name: "Khaki" },
      { name: "Green" },
      { name: "Khaki" },
      { name: "Violet" },
      { name: "Yellow" },
    ],
    images: [
      {
        url: img1,
      },
    ],
    stock: 82,
    reviews: [
      {
        customerName: "Rosamund Gianninotti",
        rating: 3,
        reviewDate: "8/4/2020",
      },
      { customerName: "Ingar Dignall", rating: 0, reviewDate: "9/20/2025" },
      { customerName: "Rae Gorrie", rating: 4, reviewDate: "10/17/2022" },
      { customerName: "Diann Greenside", rating: 0, reviewDate: "6/13/2021" },
      { customerName: "Channa Mallion", rating: 5, reviewDate: "11/1/2020" },
      { customerName: "Roxi Swallwell", rating: 1, reviewDate: "8/27/2024" },
      { customerName: "Guilbert Tew", rating: 0, reviewDate: "12/28/2022" },
      { customerName: "Vivien Venners", rating: 4, reviewDate: "11/11/2024" },
    ],
    size: [
      { name: "XXL" },
      { name: "L" },
      { name: "XXL" },
      { name: "M" },
      { name: "XXL" },
    ],
  },
  {
    id: 96,
    name: "Ms",
    description:
      "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    price: 11425.98,
    category: "Gadwal",
    brand: "Kimia",
    material: "Wool",
    color: [
      { name: "Fuscia" },
      { name: "Yellow" },
      { name: "Blue" },
      { name: "Maroon" },
      { name: "Goldenrod" },
      { name: "Red" },
      { name: "Crimson" },
      { name: "Teal" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 85,
    reviews: [],
    size: [{ name: "XXL" }],
  },
  {
    id: 97,
    name: "Honorable",
    description: "Fusce consequat. Nulla nisl. Nunc nisl.",
    price: 13176.91,
    category: "Paithani",
    brand: "Avaveo",
    material: "Wool",
    color: [],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 35,
    reviews: [
      { customerName: "Hildy Strickett", rating: 1, reviewDate: "9/6/2021" },
      { customerName: "Shantee Teas", rating: 1, reviewDate: "10/16/2023" },
      { customerName: "Oberon Kiely", rating: 4, reviewDate: "12/26/2023" },
      { customerName: "Marlon McLaine", rating: 1, reviewDate: "7/12/2024" },
      { customerName: "Lisetta Weathey", rating: 1, reviewDate: "6/27/2023" },
      { customerName: "Cirilo Bucky", rating: 2, reviewDate: "3/19/2023" },
      { customerName: "Gerda Lampet", rating: 0, reviewDate: "4/18/2025" },
      { customerName: "Pauline Frontczak", rating: 5, reviewDate: "5/18/2020" },
    ],
    size: [{ name: "L" }, { name: "S" }],
  },
  {
    id: 98,
    name: "Mrs",
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    price: 10810.71,
    category: "Banarasi",
    brand: "Mycat",
    material: "Chiffon",
    color: [{ name: "Purple" }, { name: "Red" }, { name: "Goldenrod" }],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 54,
    reviews: [
      { customerName: "Lana Pavinese", rating: 3, reviewDate: "12/30/2023" },
      { customerName: "Lisette Rolley", rating: 2, reviewDate: "7/20/2023" },
      { customerName: "Thea Hayworth", rating: 0, reviewDate: "1/8/2022" },
      { customerName: "Ronald Skeete", rating: 0, reviewDate: "11/19/2021" },
      { customerName: "Shari Sheals", rating: 2, reviewDate: "4/7/2021" },
      { customerName: "Tiffanie Farran", rating: 4, reviewDate: "12/22/2020" },
      { customerName: "Ricki Mackerel", rating: 5, reviewDate: "3/12/2024" },
      { customerName: "Brock Fabry", rating: 2, reviewDate: "9/4/2022" },
    ],
    size: [
      { name: "M" },
      { name: "XL" },
      { name: "XL" },
      { name: "M" },
      { name: "L" },
    ],
  },
  {
    id: 99,
    name: "Rev",
    description:
      "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    price: 2272.42,
    category: "Paithani",
    brand: "Linkbridge",
    material: "Georgette",
    color: [
      { name: "Indigo" },
      { name: "Orange" },
      { name: "Blue" },
      { name: "Violet" },
      { name: "Puce" },
      { name: "Violet" },
      { name: "Goldenrod" },
      { name: "Crimson" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 52,
    reviews: [
      { customerName: "Kathie Danilchenko", rating: 5, reviewDate: "8/1/2025" },
      { customerName: "Noam Itzkovitch", rating: 3, reviewDate: "11/28/2023" },
    ],
    size: [
      { name: "L" },
      { name: "L" },
      { name: "L" },
      { name: "M" },
      { name: "S" },
    ],
  },
  {
    id: 100,
    name: "Rev",
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    price: 3991.86,
    category: "Kanchipuram",
    brand: "Feedbug",
    material: "Silk",
    color: [
      { name: "Blue" },
      { name: "Green" },
      { name: "Khaki" },
      { name: "Teal" },
      { name: "Puce" },
      { name: "Fuscia" },
      { name: "Blue" },
      { name: "Teal" },
      { name: "Purple" },
      { name: "Fuscia" },
    ],
    images: [
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
      {
        url: img1,
      },
    ],
    stock: 11,
    reviews: [
      { customerName: "Sigfrid Mixter", rating: 0, reviewDate: "9/9/2025" },
      { customerName: "Amble Jankovic", rating: 1, reviewDate: "11/30/2020" },
      { customerName: "Jasmina Zambon", rating: 4, reviewDate: "10/30/2024" },
      { customerName: "Leroy Swanson", rating: 4, reviewDate: "6/14/2020" },
      { customerName: "Delbert Malenfant", rating: 2, reviewDate: "6/2/2023" },
    ],
    size: [{ name: "M" }],
  },
];

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    // const response = await fetch('/api/products'); // Replace with your API endpoint
    // if (!response.ok) {
    //   throw new Error('Failed to fetch products');
    // }
    // const data = await response.json();
    return products;
  }
);
