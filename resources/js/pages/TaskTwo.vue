<template>
  <div class="container-fluid">
    <h5>Employee List</h5>
    <ul class="list-group list-group-flush">
      <li v-for="employee in employees.value" class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ employee.name }}</div>
          {{ employee.email }}
        </div>
        <span class="badge bg-primary rounded-pill">{{ getTotalRevenueForEmployee(employee) }}</span>
      </li>
    </ul>
    <h5 class="mt-5 ">Employee with highest revenue</h5>
    <div class="card" v-if="highestRevenueEmployee">
      <div class="card-body">
        <h5 class="card-title">{{ highestRevenueEmployee.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">{{ highestRevenueEmployee.email }}</h6>
        <p class="card-text">Revenue: {{ highestRevenueEmployee.totalRevenue }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive, computed } from 'vue';
import axios from "axios";

const employees = reactive({
  value: []
})

const highestRevenueEmployee = computed(() => {
  const sortedList = employees.value.map(
    (employee) => ({ ...employee, totalRevenue: getTotalRevenueForEmployee(employee) })
  ).sort(
    (a, b) => b.totalRevenue - a.totalRevenue
  )
  return sortedList[0]
})

function getTotalRevenueForEmployee(employee) {
  return employee.sales.reduce((a, b) => a + b.order_total, 0)
}
function getEmployeeDetails() {
  axios.get("/api/employees").then((res) => {
    employees.value = res.data
  })
}


onMounted(() => {
  getEmployeeDetails()

})






</script>