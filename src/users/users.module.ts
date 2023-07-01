import { forwardRef, Module } from '@nestjs/common'
import { SequelizeModule } from '@nestjs/sequelize'
import { AuthModule } from 'src/auth/auth.module'
import { Role } from 'src/roles/roles.model'
import { RolesModule } from 'src/roles/roles.module'
import { UserRoles } from 'src/roles/user-roles.model'
import { UsersController } from './users.controller'
import { User } from './users.model'
import { UsersService } from './users.service'
import { Post } from '../posts/posts.model'

@Module({
	providers: [UsersService],
	controllers: [UsersController],
	imports: [
		SequelizeModule.forFeature([User, Role, UserRoles, Post]),
		RolesModule,
		forwardRef(() => AuthModule),
	],
	exports: [UsersService],
})
export class UsersModule {}
