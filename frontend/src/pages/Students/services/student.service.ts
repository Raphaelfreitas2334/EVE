import api from "../../../services";

import type { StudentFormData } from "../components/StudentForm/StudentForm.types";

class StudentService {
  async getAll() {
    const response = await api.get("/students");

    return response.data;
  }

  async getById(id: number) {
    const response = await api.get(`/students/${id}`);

    return response.data;
  }

  async create(data: StudentFormData) {
    const response = await api.post(
      "/students",

      data,
    );

    return response.data;
  }

  async update(id: number, data: StudentFormData) {
    const response = await api.put(
      `/students/${id}`,

      data,
    );

    return response.data;
  }

  async archive(id: number) {
    const response = await api.patch(`/students/${id}/archive`);

    return response.data;
  }

  async delete(id: number) {
    const response = await api.delete(`/students/${id}`);

    return response.data;
  }
}

export default new StudentService();
