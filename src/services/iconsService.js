import React from "react";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonPinCircleIcon from "@material-ui/icons/PersonPinCircle";
import RecentActorsIcon from "@material-ui/icons/RecentActors";
import EmailIcon from "@material-ui/icons/Email";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";

const icons = {
  [`/Auth/register`]: <PersonAddIcon />,
  [`/Auth/roles_and_permissions`]: <PersonPinCircleIcon />,
  [`/Auth/officers_management`]: <RecentActorsIcon />,
  [`/Auth/settings`]: <EmailIcon />,
  [`/Auth/DriversList`]: <LibraryBooksIcon />,
  [`/Auth/verification`]: <VerifiedUserIcon />
};

const iconsService = icon => {
  return icons[icon];
};

export default iconsService;
