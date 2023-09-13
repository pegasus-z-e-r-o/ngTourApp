import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  constructor() {}

  ChennaiPlace() {
    return [
      {
        id: 1,
        title: 'Central Railway Station',
        text: "A historic transport hub connecting the city's heritage with modern travel, emblematic of South India's rail network.",
        img: './assets/images/chennai/central-railway-station.jpg',
        altname: 'central-railway-station',
      },
      {
        id: 2,
        title: 'Madras Marina Beach',
        text: 'Marina Beach is one of the longest urban beaches in the world, stretching Bay of Bengal in Chennai',
        img: './assets/images/chennai/marina beach.jpg',
        altname: 'marina beach',
      },
      {
        id: 3,
        title: 'Express Avenue Mall',
        text: ' its diverse shopping, entertainment, and dining experiences, making it a one-stop destination for urban indulgence.',
        img: './assets/images/chennai/express avenue mall.jpg',
        altname: 'express avenue mall',
      },
      {
        id: 4,
        title: 'Parthasarathy Temple',
        text: ' intricate Dravidian architecture and its historic significance as a temple dedicated to Lord Krishna.',
        img: './assets/images/chennai/arulmigu thiruvallikeni parthasarathy temple.jpg',
        altname: 'arulmigu parthasarathy temple',
      },
      {
        id: 5,
        title: 'Vadapalani Murugan Temple',
        text: ' its powerful deity Lord Murugan a unique chariot festival and is a prominent pilgrimage site in Chennai.',
        img: './assets/images/chennai/vadapalani murugan temple.jpg',
        altname: 'Vadapalani Murugan Temple',
      },
      {
        id: 6,
        title: 'T-Nagar Ranganathan Street',
        text: ' A bustling shopping destination renowned for its vibrant street markets and diverse retail offerings in Chennai',
        img: './assets/images/chennai/t nagar ranganathan street.jpg',
        altname: 't nagar ranganathan street',
      },
      {
        id: 7,
        title: 'VGP Marine Kingdom',
        text: 'VGP Marine Kingdom in Chennai offers immersive underwater experience an enchanting marine-themed amusement park experience.',
        img: './assets/images/chennai/vgp marine kingdom.jpg',
        altname: 'vgp marine kingdom',
      },
      {
        id: 8,
        title: 'VGP Frozen Kingdom',
        text: 'VGP Frozen Kingdom in Chennai offers an enchanting ice-themed indoor amusement entertainment experience for all ages.',
        img: './assets/images/chennai/vgp snow kingdom.jpg',
        altname: 'vgp snow kingdom',
      },
    ];
  }

  MaduraiPlace() {
    return [
      {
        id: 9,
        title: 'Madurai Meenakshi Temple',
        text: 'A stunning masterpiece of Dravidian architecture with 14 colorful gopurams and intricate sculptures.',
        img: './assets/images/madurai/madurai-meenakshi-temple.jpg',
        altname: 'madurai-meenakshi-temple',
      },
      {
        id: 10,
        title: 'Gandhi Memorial Museum',
        text: "A historic site to Mahatma Gandhi's life and the Indian independence movement,shows his personal belongings.",
        img: './assets/images/madurai/gandhi memorial museum.jpg',
        altname: 'Gandhi Memorial Museum',
      },
      {
        id: 11,
        title: 'Arulmigu Alagarkoil Temple',
        text: ' its exquisite Dravidian architecture and as a sacred abode dedicated to Lord Vishnu in his Alagar form',
        img: './assets/images/madurai/alagarkoil-temple-and.jpg',
        altname: 'alagarkoil-temple',
      },
      {
        id: 12,
        title: 'Kutladampatti Falls (Madurai Kutralam)',
        text: 'its stunning cascades surrounded by lush greenery, offering a refreshing and serene natural retreat near Madurai',
        img: './assets/images/madurai/kutladampatti-falls.jpg',
        altname: 'kutladampatti-falls',
      },
      {
        id: 13,
        title: 'Solamalai Murugan Temple',
        text: 'This temple is renowned for its serene hilltop location and vibrant festivals celebrating Lord Murugan',
        img: './assets/images/madurai/pazhamudhir-solai.jpg',
        altname: 'pazhamudhir-solai',
      },
      {
        id: 14,
        title: 'Goripalayam Dargah',
        text: 'Goripalayam Dargah" is a large mosque in Goripalayam and is known for its revered shrine and historical significance in Madurai, India.',
        img: './../assets/images/madurai/goripalayam dargah.jpg',
        altname: 'goripalayam dargah',
      },
      {
        id: 15,
        title: "St.Mary's Cathedral Church",
        text: "St. Mary's Cathedral Church in Madurai is renowned for its exquisite Gothic architecture and historical significance.",
        img: "./assets/images/madurai/st.mary's cathedral church.jpg",
        altname: "st.mary's cathedral church",
      },
      {
        id: 16,
        title: 'Thirumalai Nayakar Mahal',
        text: ' Its splendid Indo-Saracenic architecture, blending Dravidian and Islamic styles, located in Madurai, India.',
        img: './assets/images/madurai/thirumalai nayakar mahal.jpg',
        altname: 'thirumalai nayakar mahal',
      },
    ];
  }

  ThanjavurPlace() {
    return [
      {
        id: 17,
        img: './assets/images/thanjavur/gangaikondacholapuram.jpg',
        text: 'It is renowned for its grand Brihadeshwara-like temple, showcasing the architectural brilliance of the Chola dynasty in South India.',
        title: 'Gangaikondacholapuram',
        altname: 'gangaikondacholapuram',
      },
      {
        id: 18,
        img: './assets/images/thanjavur/manora-fort.jpg',
        text: 'Manora Fort in Thanjavur is renowned for its unique hexagonal tower and historical significance in the coastal landscape of Tamil Nadu, India.',
        title: 'Manora Fort Thanjavur',
        altname: 'manora-fort',
      },
      {
        id: 19,
        img: './assets/images/thanjavur/punnainallur-mariamman.jpg',
        text: 'Punnainallur Mariamman is renowned for its powerful Hindu temple dedicated to the goddess Mariamman and vibrant festivals in Tamil Nadu.',
        title: 'Punnainallur Mariamman',
        altname: 'Punnainallur Mariamman',
      },
      {
        id: 20,
        img: './assets/images/thanjavur/royal palace and art gallery.jpg',
        text: 'An opulent fusion of regal history and artistic grandeur, showcasing exquisite artworks within a majestic Royal Palace Art Gallery',
        title: 'Royal Palace and Art Gallery',
        altname: 'royal palace and art gallery',
      },
      {
        id: 21,
        img: './assets/images/thanjavur/thanjavur-brihadeeshwara temple.jpg',
        text: 'its towering vimana and being a UNESCO World Heritage site, symbolizing the architectural and artistic brilliance of Chola dynasty in South India.',
        title: 'Brihadeeshwara Temple',
        altname: 'thanjavur-brihadeeshwara temple',
      },
      {
        id: 22,
        img: './assets/images/thanjavur/srinivase ramanujan house.jpg',
        text: 'The place of historical significance dedicated to the Indian mathematician, shows his life and contributions to the field of mathematics.',
        title: 'Srinivase Ramanujan House',
        altname: 'srinivase ramanujan house',
      },
      {
        id: 23,
        img: './assets/images/thanjavur/swami malai temple.jpg',
        text: 'Swami Malai Temple, Thanjavur: Renowned for its intricate architecture and revered as the abode of Lord Murugan situated atop a hillock.',
        title: 'Arulmigu Swami Malai Temple',
        altname: 'swami malai temple',
      },
      {
        id: 24,
        img: './assets/images/thanjavur/the serfoji sarasvati mahal library.jpg',
        text: 'The Serfoji Sarasvati Mahal Library is renowned for its invaluable collection of ancient manuscripts and rare literary treasures.',
        title: 'Serfoji Sarasvati Mahal Library',
        altname: 'the serfoji sarasvati mahal library',
      },
    ];
  }

  CovaiPlace() {
    return [
      {
        id: 25,
        title: 'The Adiyogi Statue',
        text: 'The Adiyogi Statue is a remarkable 112-foot-tall sculpture of Lord Shiva, known for its significance as a symbol of yogic wisdom and spiritual transformation.',
        img: './assets/images/covai/the-adiyogi-statue-is.jpg',
        altname: 'the-adiyogi-statue',
      },
      {
        id: 26,
        title: 'Brookefields Mall',
        text: 'Brookfields Mall captivates visitors with its diverse retail paradise, offering an exquisite blend of high-end fashion boutiques and a delightful array of culinary treasures.',
        img: './assets/images/covai/brookefields mall.jpg',
        altname: 'brookefields mall',
      },
      {
        id: 27,
        title: 'Black Thunder',
        text: 'Black Thunder" is a renowned water park known for its exhilarating array of water rides, offering visitors an immersive and thrilling aquatic experience  for adventure-seekers',
        img: './assets/images/covai/black-thunder-theme-park.jpg',
        altname: 'black-thunder-theme-park',
      },
      {
        id: 28,
        title: 'Codissia Complex',
        text: 'The Codissia Complex is a versatile trade fair and exhibition center, hosting a wide industrial and commercial events, fostering innovation and business growth',
        img: './assets/images/covai/codissia trade fair complex.jpg',
        altname: 'codissia trade fair complex',
      },
      {
        id: 29,
        title: 'Dhyanalinga Temple',
        text: 'The Dhyanalinga Temple is renowned for being a unique meditative space that offers a powerful atmosphere for inner transformation and self-discovery.',
        img: './assets/images/covai/dhyanalinga-temple.jpg',
        altname: 'dhyanalinga-temple',
      },
      {
        id: 30,
        title: 'Kovai Kutralam Falls',
        text: 'Kovai Kutralam Falls is renowned for its captivating natural beauty and rejuvenating atmosphere, refreshing experience of immersing oneself cool, revitalizing waters.',
        img: './assets/images/covai/kovai-kutralam-falls.jpg',
        altname: 'kovai-kutralam-falls',
      },
      {
        id: 31,
        title: 'Marudamalai Temple',
        text: 'Marudamalai Temple is renowned for its dedication to Lord Murugan and its picturesque hillside location, making it a significant pilgrimage site in South India.',
        img: './assets/images/covai/marudamalai-temple.jpg',
        altname: 'marudamalai-murugan-temple',
      },
      {
        id: 32,
        title: 'Vellingiri Hill Temple',
        text: 'Vellingiri Hill Temple is known for its spiritual significance and breathtaking natural beauty, offering a unique blend of pilgrimage and serene landscapes.',
        img: './assets/images/covai/vellingiri hill temple.jpg',
        altname: 'vellingiri hill temple',
      },
    ];
  }

  KanchipuramPlace() {
    return [
      {
        id: 33,
        img: './assets/images/kanchipuram/kamakshi amman temple.jpg',
        altname: 'kamakshi amman temple',
        title: 'kamakshi amman temple',
        text: 'The Kamakshi Amman Temple is renowned for its powerful deity, Goddess Kamakshi, believed to grant wishes and bring prosperity to devotees.',
      },
      {
        id: 34,
        img: './assets/images/kanchipuram/sri ulagalandar temple.jpg',
        altname: 'sri ulagalandar temple',
        title: 'sri ulagalandar temple',
        text: "Sri Ulagalandar Temple in Kanchipuram is renowned for its towering 11-headed snake sculpture, symbolizing Lord Vishnu's cosmic protection.",
      },
      {
        id: 35,
        img: './assets/images/kanchipuram/varadaraja perumal temple.jpg',
        altname: 'varadaraja perumal temple',
        title: 'varadaraja perumal temple',
        text: 'Varadaraja Perumal Temple in Kanchipuram is renowned for its 1000-pillared hall, shows exquisite architecture and intricate sculptures.',
      },
      {
        id: 36,
        img: './assets/images/kanchipuram/chitragupta swamy temple.jpg',
        altname: 'chitragupta swamy temple',
        title: 'chitragupta swamy temple',
        text: "The Chitragupta Swamy Temple in Kanchipuram, the divine recorder of deeds, making it a unique and important pilgrimage site.",
      },
      {
        id: 37,
        img: './assets/images/kanchipuram/ekambareswarar temple.jpg',
        altname: 'ekambareswarar temple',
        title: 'ekambareswarar temple',
        text: 'Ekambareswarar Temple in Kanchipuram is renowned for its massive temple complex and the sacred mango tree believed to grant wishes.',
      },
      {
        id: 38,
        img: './assets/images/kanchipuram/kailasanatha temple.jpg',
        altname: 'kailasanatha temple',
        title: 'kailasanathar temple',
        text: 'Its renowned for being one of the oldest and most well-preserved structural temples in South India, shows exquisite Dravidian architecture.',
      },
      {
        id: 39,
        img: './assets/images/kanchipuram/thennangur panduranga temple.jpg',
        altname: 'thennangur panduranga temple',
        title: 'thennangur panduranga temple',
        text: 'its unique architecture and vibrant festivals, attracting devotees seeking spiritual solace and cultural experiences.',
      },
      {
        id: 40,
        img: './assets/images/kanchipuram/vedanthangal-bird-sanctuary.jpg',
        altname: 'vedanthangal-bird-sanctuary',
        title: 'vedanthangal bird sanctuary',
        text: '"Vedanthangal Bird Sanctuary is renowned for hosting thousands of migratory birds, creating a captivating spectacle for bird enthusiasts."',
      },
    ];
  }

  VellorePlace(){
    return [
      {
        title:'Golden Temple',
        text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum,sint.',
        altname:'golden-temple',
        img:'./assets/images/vellore/sripuram-golden-temple.jpg',
      },
      
    ]
  }
}
