import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  HttpStatus,
  HttpCode,
  // ParseIntPipe,
} from '@nestjs/common';

import { ProductsService } from '../../services/products/products.service';
import { ParseIntPipe } from '../../common/parse-int/parse-int.pipe';
import { CreateProductDto, UpdateProductDto } from 'src/dtos/products.dtos';
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAll(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }

  @Get('filter')
  getAllFilter() {
    return `yo soy un filter`;
  }

  // @Get('express/:productId')
  // @HttpCode(HttpStatus.ACCEPTED)
  // getOneExpress(@Res() res: Response, @Param('productId') productId: string) {
  //    res.status(200).send({ message: `product ${productId}` });
  // }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
  getOne(@Param('productId', ParseIntPipe) productId: number) {
    // return { message: `product ${productId}` };
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'Accion de Crear',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateProductDto) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
