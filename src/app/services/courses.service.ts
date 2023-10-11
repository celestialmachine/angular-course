import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient) {

  }

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams()
      .set("page", "1")
      .set("pageSize", "10");

      return this.http.get<Course[]>('/api/courses', {params});
  }

  saveCourse(course:Course) {

    const header = new HttpHeaders()
      .set("X-Auth", "userId");

    return this.http.put(`/api/courses/${course.id}`,
      course,
      {headers: header});
  }
}
