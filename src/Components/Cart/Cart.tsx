 import './Cart.css'
 import Badge from '@mui/material/Badge';
 import MailIcon from '@mui/icons-material/Mail';
 import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';

 type CartProps = {
     count?: number | string; 
 };
 
const Cart = ({ count }: CartProps) => {
  
  const constumStyle = {
    backgroundColor:'#004d40' ,  
    color:"white" , 
    borderRadius:'50%' , 
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
  }
  
  return (
  
      <Badge badgeContent={count} color="primary" className="cart" style={constumStyle} >
         <LocalGroceryStoreIcon   />
      </Badge>
  
  )
} 

export default Cart