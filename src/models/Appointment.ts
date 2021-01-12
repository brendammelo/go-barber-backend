import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// entidade de agendamento
@Entity('appointments') // decorator para linkar classe a entidade(banco de dados)
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Appointment;
