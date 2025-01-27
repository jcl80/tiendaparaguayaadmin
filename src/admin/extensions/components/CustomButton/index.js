import React from "react";
import { Button } from "@strapi/design-system";
import { Filter } from "@strapi/icons";
import { useNotification } from "@strapi/helper-plugin";

const CustomButton = () => {
  const toggleNotification = useNotification();

  const handleClick = async () => {
    try {
      toggleNotification({
        type: "success",
        message: "Model updated successfully!",
      });
    } catch (error) {
      console.error(error);
      toggleNotification({
        type: "warning",
        message: "Failed to update the model.",
      });
    }
  };

  return (
    <Button variant="default" startIcon={<Filter />} onClick={handleClick}>
      Boton de prueba
    </Button>
  );
};

export default CustomButton;
