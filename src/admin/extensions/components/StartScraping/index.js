import React from "react";
import { Button } from "@strapi/design-system";
import { Filter } from "@strapi/icons";
import {
  useNotification,
} from "@strapi/helper-plugin";

const StartScrapingButton = () => {
  const toggleNotification = useNotification();

  const url = window.location.pathname; // Get the current URL path
  const slug = url.split("/").pop(); // Extract the last part of the URL (e.g., "scraping-task")

  // Check if the button should only show for "scraping-task" collection type
  if (slug !== "api::scraping-task.scraping-task") {
    return null; // Do not render the button for other collection types
  }

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
      Start Scraping
    </Button>
  );
};

export default StartScrapingButton;
