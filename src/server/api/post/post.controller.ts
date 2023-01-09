import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import PostService from './post.service';
import { CreatePostDto, UpdatePostDto } from './post.dto';
import { Roles } from 'src/server/shared/auth/roles/role.decorator';
import { Role } from 'src/server/shared/auth/roles/role.enum';
import RoleGuard from 'src/server/shared/auth/roles/role.guard';
import { JwtAuthGuard } from 'src/server/shared/auth/jwt/jwt-auth.guard';

@Controller('Posts')
@UseGuards(JwtAuthGuard)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getAllPosts() {
    return await this.postService.getAllPosts();
  }

  @Get(':id')
  async getPostById(@Param('id') id: string) {
    return await this.postService.getPostById(Number(id));
  }

  @Post()
  @UseGuards(RoleGuard(Role.Admin))
  async createPost(@Body() post: CreatePostDto) {
    return await this.postService.createPost(post);
  }

  @Put(':id')
  @UseGuards(RoleGuard(Role.Admin))
  async updatePost(@Param('id') id: string, @Body() post: UpdatePostDto) {
    return await this.postService.updatePost(Number(id), post);
  }

  @Delete(':id')
  @UseGuards(RoleGuard(Role.Admin))
  async deletePost(@Param('id') id: string) {
    return await this.postService.deletePost(Number(id));
  }
}
