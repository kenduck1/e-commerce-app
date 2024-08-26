import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Product {
  @PrimaryKey({ type: "number" })
  id!: number;

  @Property({ type: "text" })
  name!: string;

  @Property({ type: "text" })
  description!: string;

  @Property({ type: "number" })
  price!: number;

  @Property({ type: "text" })
  imageUrl!: string;
}
