import { injectable, OnModuleInit } from '@nestjs/common'
import { PrismaClient} from "@prisma/client"

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
	async OnModuleInit(){
		await this.$connect();
	}
}