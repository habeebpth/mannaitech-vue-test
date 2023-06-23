<template>
  <div class="container-fluid">
    <ul class="list-group list-group-flush">
      <li v-for="employee in employees.value" class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ employee.name }}</div>
          {{ employee.email }}
        </div>
        <span class="badge bg-primary rounded-pill">{{ getTotalRevenueForEmployee(employee) }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { onMounted, reactive } from 'vue';
import axios from "axios";

const employees = reactive({
  value: []
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