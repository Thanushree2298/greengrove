// Import necessary dependencies and components
import { useShoppingCart } from "@/context/ShoppingCartContext";
import PlantsData, { plantData } from "@/utils/PlantsData";
import Image from "next/image";
import { Button } from "./ui/button";

// Define the CartItemProps type
type CartItemProps = {
  id: number;
  quantity: number;
};

// Define the CartItem component
export function CartItem({ id, quantity }: CartItemProps) {
  const { removeItem } = useShoppingCart();

  // Find the item in the PlantsData object
  const item = findPlantById(id);

  // If the item is not found, return null
  if (!item) return null;

  return (
    <div className="gap-5 cartcontainer mt-2">
      <div className="cart-item gap-2">
      <Image className="rounded mt-2 mb-2"
      src={item.imageUrl} alt="image" width={70} height={50}/>
      <div className="item-details ml-2">
      <div className="item-name">
        {item.name} {quantity > 1 && <span className="text-muted">x{quantity}</span>}
      </div>
      <div>
        {item.price} 
      </div>
      </div>
      <div className="mr-2">
      ${item.price * quantity}
      </div>
      <Button onClick={() => removeItem(item.id)}>
        &times;
      </Button>
     </div>
    
    </div>
  );
}

// Function to find a plant by ID in the PlantsData object
const findPlantById = (id: number): plantData[keyof plantData][number] | undefined => {
  for (const category in PlantsData) {
    if (PlantsData.hasOwnProperty(category)) {
      const plantsInCategory = PlantsData[category as keyof plantData];

      const plant = plantsInCategory.find((p) => p.id === id);

      if (plant) {
        return plant;
      }
    }
  }

  return undefined;
};
