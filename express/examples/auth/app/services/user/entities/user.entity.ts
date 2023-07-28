import { Column, DataType, Table, Model } from "sequelize-typescript";

@Table({ tableName: "users" })
export class UserEntity extends Model {
    @Column({
        allowNull: false,
        unique: true,
        type: DataType.STRING,
    })
    name: string;

    @Column({
        allowNull: false,
        unique: true,
        type: DataType.STRING,
    })
    email: string;

    @Column({
        allowNull: false,
        type: DataType.STRING,
    })
    password: string;

    @Column({ type: DataType.STRING })
    foto?: string;
}
