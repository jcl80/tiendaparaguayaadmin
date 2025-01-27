import React from "react";
import { Flex, Box } from "@strapi/design-system";
import CustomButton from "./extensions/components/CustomButton/index.js";
import StartScrapingButton from "./extensions/components/StartScraping/index.js";

const config = {
  locales: [],
};

const bootstrap = (app) => {
  const collectionTypeButtons = {
    "api::scraping-task.scraping-task": [StartScrapingButton, CustomButton],
    "api::post.post": [CustomButton],
  };

  app.injectContentManagerComponent("listView", "actions", {
    name: "DynamicButtons",
    Component: (props) => {
      console.log("Props in ListView - > slug", props.slug);

      return (
        <Flex gap="8px" justifyContent="flex-end">
          <Box>
            <CustomButton />
          </Box>
          <Box>
            <StartScrapingButton />
          </Box>
        </Flex>
      );
    },
  });
};

export default {
  config,
  bootstrap,
};
