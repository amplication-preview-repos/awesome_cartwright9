/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ScrapingBotWhereInput } from "./ScrapingBotWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class ScrapingBotCountArgs {
  @ApiProperty({
    required: false,
    type: () => ScrapingBotWhereInput,
  })
  @Field(() => ScrapingBotWhereInput, { nullable: true })
  @Type(() => ScrapingBotWhereInput)
  where?: ScrapingBotWhereInput;
}

export { ScrapingBotCountArgs as ScrapingBotCountArgs };
