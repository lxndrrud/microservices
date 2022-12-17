import { Field } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'; 

@Entity({ name: "public.products" }) 
export class Product { 
   @Field()
   @PrimaryGeneratedColumn() 
   id: number; 
   
   @Field()
   @Column() 
   title: string;
}