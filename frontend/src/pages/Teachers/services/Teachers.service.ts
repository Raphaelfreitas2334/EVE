import api from "../../../services";
import type { TeachersFormData } from "../components/TeacherForm";

class TeachersService {
  async getAll() {
    const response = await api.get("/students");

    return response.data;
  }

  async getById(id: number) {
    const response = await api.get(`/students/${id}`);

    return response.data;
  }

  async create(data: TeachersFormData) {
    const response = await api.post(
      "/students",

      data,
    );

    return response.data;
  }

  async update(id: number, data: TeachersFormData) {
    const response = await api.put(
      `/students/${id}`,

      data,
    );

    return response.data;
  }

  async archive(id: number) {
    const response = await api.patch(`/teachers/${id}/archive`);

    return response.data;
  }

  async delete(id: number) {
    const response = await api.delete(`/teachers/${id}`);

    return response.data;
  }
}

export default new TeachersService();
