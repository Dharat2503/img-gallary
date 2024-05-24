// // on off with effects 

import React, { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import Switch from '@mui/material/Switch'; 

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Retail',
    author: 'E-Commerce',
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Education',
    author: 'Education',
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Healthcare &',
    author: 'Fitness',
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Logistic &',
    author: 'Distribution',
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Social',
    author: 'Networking',
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: '',
    author: 'Real Estate',
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Travel &',
    author: 'Hospitality',
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Food &',
    author: 'Restaurants',
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'On-Demand',
    author: 'Solution',
    cols: 1,
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: '',
    author: 'Gaming',
    cols: 1,
  },
];

const Home2 = () => {
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(false);

  const handleToggleLoading = () => {
    setLoading((prevLoading) => !prevLoading);
    if (!loading) {
      setAnimate(true);
    }
  };

  useEffect(() => {
    if (!loading) {
      setAnimate(false);
    }
  }, [loading]);

  // Define the order in which the images should reveal
  const revealOrder = [1, 2, 3, 0,  5, 6, 7,4, 8, 9];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div style={{ textAlign: 'center' }}>
        <h2>Our Sectors of Services</h2>
        <p>We create Applications in practically every category here. We'll build whatever you can imagine.</p>
      </div>

      <ImageList sx={{ width: 800 }} cols={4} rowHeight={200}>
        <ImageListItem key="Subheader" cols={4} style={{ height: 'auto' }}>
          <ListSubheader component="div">
            <Switch checked={loading} onChange={handleToggleLoading} inputProps={{ 'aria-label': 'Size switch demo' }} />
          </ListSubheader>
        </ImageListItem>
        {itemData.map((item, index) => (
          <ImageListItem 
            key={item.img} 
            cols={item.cols || 1}
            style={{ 
              height: 'auto',
              display: 'inline-block',
              transitionDuration: '0.3s',
              transitionProperty: 'transform',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.img}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{ 
                height: '300px', 
                objectFit: 'cover', 
                transition: 'transform 0.3s',
                transform: 'scale(1)',
              }}
              onMouseOver={(e) => e.target.style.transform = 'scale(1.3)'} 
              onMouseOut={(e) => e.target.style.transform = 'scale(1)'} 
            />
            {!loading && (
              <div
                style={{
                  backgroundColor: 'rgba(102, 205, 170, 1)', 
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
              ></div>
            )}
            {loading && (
              <div
                style={{
                  backgroundColor: 'rgba(102, 205, 170, 1)', 
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  animation: animate ? `fadeOut 1s ${revealOrder.indexOf(index) * 0.5}s forwards` : 'none',
                }}
              ></div>
            )}
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              sx={{
                background: 'none', 
                position: 'absolute', 
                bottom: 0, 
                width: '100%', 
              }}
            />
          </ImageListItem>
        ))}
      </ImageList>

      <style jsx="true">{`
        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default Home2;


//onclick open hover 
// import React, { useState } from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';


// const itemData = [
//     {
//         img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//         title: 'Retail',
//         author: 'E-Commerce',
//         cols: 1,
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//         title: 'Education',
//         author: 'Education',
//         cols: 1,
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//         title: 'Healthcare &',
//         author: 'Fitness',
//         cols: 1,
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//         title: 'Logistic &',
//         author: 'Distribution',
//         cols: 1,
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//         title: 'Social',
//         author: 'Networking',
//         cols: 1,
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//         title: '',
//         author: 'Real Estate',
//         cols: 1,
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//         title: 'Travel &',
//         author: 'Hospitality',
//         cols: 1,
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//         title: 'Food &',
//         author: 'Restaurants',
//         cols: 1,
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//         title: 'On-Demand',
//         author: 'Solution',
//         cols: 1,
//       },
//       {
//         img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//         title: '',
//         author: 'Gaming',
//         cols: 1,
//       },
// ];

// const Home2 = () => {
//   const [selectedCard, setSelectedCard] = useState(null);

//   const handleCardClick = (index) => {
//     setSelectedCard(index);
//   };

//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
//       <div style={{ textAlign: 'center' }}>
//         <h2>Our Sectors of Services</h2>
//         <p>We create Applications in practically every category here. We'll build whatever you can imagine.</p>
//       </div>

//       <ImageList sx={{ width: 800 }} cols={4} rowHeight={200}>
//         {itemData.map((item, index) => (
//           <ImageListItem 
//             key={item.img} 
//             cols={item.cols || 1}
//             style={{ 
//               height: 'auto',
//               display: 'inline-block',
//               transitionDuration: '0.3s',
//               transitionProperty: 'transform',
//               overflow: 'hidden',
//               position: 'relative',
//             }}
//             onClick={() => handleCardClick(index)}
//           >
//             <img
//               srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//               src={`${item.img}?w=248&fit=crop&auto=format`}
//               alt={item.title}
//               loading="lazy"
//               style={{ 
//                 height: '300px', 
//                 objectFit: 'cover', 
//                 transition: 'transform 0.3s',
//                 transform: selectedCard === index ? 'scale(1.3)' : 'scale(1)',
//               }}
//             />
//             {selectedCard !== index && (
//               <div
//                 style={{
//                   backgroundColor: 'rgba(102, 205, 170, 1)', 
//                   width: '100%',
//                   height: '100%',
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                 }}
//               ></div>
//             )}
//             <ImageListItemBar
//               title={item.title}
//               subtitle={item.author}
//               sx={{
//                 background: 'none', 
//                 position: 'absolute', 
//                 bottom: 0, 
//                 width: '100%', 
//               }}
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </div>
//   );
// }

// export default Home2;
