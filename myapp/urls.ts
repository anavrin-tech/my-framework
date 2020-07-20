import { CustomerController } from './customer_controller.ts';
import { CourseController } from './course_controller.ts';
import { ProfileController } from './profile_controller.ts';

export var urls = [
    {reg: '^/customer/\\d+/', controller: new CustomerController() },
    {reg: '^/course/\\d+/', controller: new CourseController() },
    {reg: '^/profile/\\d+/', controller: new ProfileController() }
]