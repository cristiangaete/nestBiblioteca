"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_entity_1 = require("./entities/book.entity");
const typeorm_2 = require("typeorm");
const author_entity_1 = require("../author/entities/author.entity");
let BooksService = class BooksService {
    constructor(bookRepository, authorRepository) {
        this.bookRepository = bookRepository;
        this.authorRepository = authorRepository;
    }
    async create(createBookDto) {
        const author = await this.authorRepository.findOneBy({ name: createBookDto.author });
        if (!author) {
            throw new common_1.BadRequestException('author no found');
        }
        return await this.bookRepository.save({
            ...createBookDto,
            author
        });
    }
    async findAll() {
        return await this.bookRepository.find();
    }
    async findOne(id) {
        return await this.bookRepository.findOneBy({ id });
    }
    async update(id, updateBookDto) {
    }
    async remove(id) {
        return await this.bookRepository.softDelete(id);
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.Book)),
    __param(1, (0, typeorm_1.InjectRepository)(author_entity_1.Author)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BooksService);
//# sourceMappingURL=books.service.js.map