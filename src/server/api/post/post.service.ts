import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto, UpdatePostDto } from './post.dto';

@Injectable()
export default class PostService {
  @InjectRepository(Post)
  private readonly repository: Repository<Post>;

  public async getPostById(id: number): Promise<Post> {
    const post = await this.repository.findOne({
      where: {
        id: id,
      },
    });
    if (post) {
      return post;
    }

    throw new HttpException('Post not Found', HttpStatus.NOT_FOUND);
  }

  public async getAllPosts(): Promise<Post[]> {
    return await this.repository.find();
  }

  public async createPost(post: CreatePostDto): Promise<Post> {
    const newPost = await this.repository.create(post);
    await this.repository.save(newPost);

    return newPost;
  }

  public async updatePost(id: number, post: UpdatePostDto): Promise<Post> {
    await this.repository.update(id, post);
    const updatedPost = await this.repository.findOne({ where: { id: id } });
    if (updatedPost) {
      return updatedPost;
    }

    throw new HttpException('Post Not found', HttpStatus.NOT_FOUND);
  }

  public async deletePost(id: number): Promise<number> {
    const deletedPost = await this.repository.delete(id);
    if (deletedPost.affected) {
      return id;
    }

    throw new HttpException('Post not found', HttpStatus.NOT_FOUND);
  }
}
