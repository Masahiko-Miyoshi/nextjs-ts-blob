
// import React, { useEffect } from 'react';
// import { blackA } from '@radix-ui/colors';
// import * as LabelPrimitive from '@radix-ui/react-label';
// import { styled } from '@stitches/react';


// const StyledLabel = styled(LabelPrimitive.Root, {
//   fontSize: 15,
//   fontWeight: 500,
//   color: 'blue',
//   userSelect: 'none',
// });

// // Exports
// const Label = StyledLabel;

// // Your app...
// const Flex = styled('div', { display: 'flex' });
// const Input = styled('input', {
//   all: 'unset',
//   width: 200,
//   display: 'inline-flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   borderRadius: 4,
//   padding: '0 10px',
//   height: 35,
//   fontSize: 15,
//   lineHeight: 1,
//   color: 'blue',
//   backgroundColor: blackA.blackA5,
//   boxShadow: `0 0 0 1px ${blackA.blackA9}`,
//   '&:focus': { boxShadow: `0 0 0 2px black` },
// });

// const getString = () =>{
//   const inputItem = document.getElementById("firstName") as HTMLInputElement;
  
//   if(inputItem !== null){
//     const value = inputItem.value;
//     console.log("MMMM" + value);
//   }

// }

// const LabelDemo = () =>{
 
//   useEffect(()=>
//   { 
//     getString();
//   },
//   []);
//   return (
//   <Flex css={{ padding: '0 20px', flexWrap: 'wrap', gap: 15, alignItems: 'center' }}>
//     <Label htmlFor="firstName" css={{ lineHeight: '35px' }}>
//       First name
//     </Label>
//     <Input type="text" id="firstName" defaultValue="Pedro Duarte" onClick ={getString} />
//   </Flex>
  
//   );
// }

// export default LabelDemo;
