import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Avatar from "@/img/avatar.png";

interface iUser {
  description: string;
  avatar: {
    name: string;
    src: StaticImport;
    alt: string;
  };
}

export const mock: iUser[] = [
  {
    description:
      "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
    avatar: {
      name: "Jane Cooper",
      src: Avatar,
      alt: "10KWh",
    },
  },
  {
    description:
      "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
    avatar: {
      name: "Ralph Edwards",
      src: Avatar,
      alt: "32KWh",
    },
  },
  {
    description:
      "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    avatar: {
      name: "Cameron Williamson",
      src: Avatar,
      alt: "12KWh",
    },
  },
  {
    description:
      "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
    avatar: {
      name: "Courtney Henry",
      src: Avatar,
      alt: "6KWh",
    },
  },
  {
    description:
      "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
    avatar: {
      name: "Cameron Williamson",
      src: Avatar,
      alt: "12KWh",
    },
  },
];
