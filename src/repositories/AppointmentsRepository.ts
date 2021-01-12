import { EntityRepository, Repository } from 'typeorm';

import Appointment from '../models/Appointment';
// Data transfer object

@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    }); // need await because findOne is a promise, and has a time to load
    return findAppointment || null;
  }
}

export default AppointmentsRepository;
