import { Injectable, NotFoundException } from "@nestjs/common";
import { CreatePostDto } from "./dto/create-post.dto";
import { UpdatePostDto } from "./dto/update-post.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "./entities/post.entity";
import { DeleteResult } from "typeorm";

export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}

  async create(createPostDto: CreatePostDto): Promise<Post> {
    const newPost = new Post();

    Object.assign(newPost, createPostDto);

    return await this.postRepository.save(newPost);
  }

  async findAll(): Promise<Post[]> {
    return this.postRepository.find();
  }

  async findOne(id: number): Promise<Post> {
    const post: Post | null = await this.postRepository.findOneBy({ id });

    if (post == null) throw new NotFoundException("Post Not Founded");

    return post;
  }

  async update(id: number, updatePostDto: UpdatePostDto): Promise<Post> {
    const updatedPost: Post | null = await this.postRepository.findOneBy({ id });
    
    if (updatedPost == null)
      throw new NotFoundException("Post Not Founded !");

    Object.assign(updatedPost, updatePostDto);

    return this.postRepository.save(updatedPost );
  }

  async remove(id: number): Promise<DeleteResult> {
    return this.postRepository.delete({ id });
  }
}
