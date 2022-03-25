import { Body, Controller, Get, Param, Post, Put } from "@nestjs/common";
import { ApiOperation, ApiParam, ApiTags } from "@nestjs/swagger";
import { ContractsService } from "./contracts.service";
import { CreateContractDto } from "./dto/create-contract.dto";

@ApiTags('contracts')
@Controller('contracts')
export class ContractsController {
    constructor(private contractsService: ContractsService) {}


    @Get()
    @ApiOperation({ summary: 'Get all contracts' })
    async findAll() {
        return await this.contractsService.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'Add new contract for the user' })
    async addContract(@Body() createContractDto: CreateContractDto) {
        return await this.contractsService.create(createContractDto);
    }

    @Put(':id')
    @ApiParam({
        name: 'id',
        description: 'Id of contract to update',
        allowEmptyValue: false
    })
    @ApiOperation({ summary: 'Update contract' })
    async update(@Param() id: string, @Body() updateContractDto: CreateContractDto) {
        return await this.contractsService.update(id, updateContractDto);
    }
}
