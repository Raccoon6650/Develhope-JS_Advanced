// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000


function calculateSalary(role) {
  switch(role) {
    case 'ceo':
      salary = 'lo stipendio del ceo è di 2200€';
      return salary
      break;
    
    case 'manager':
      salary = 'lo stipendio del manager è di 1800€';
      return salary
      break;

    case 'cto':
      salary = 'lo stipendio del cto è di 1800€';
      return salary
      break;

    case 'developer':
      salary = 'lo stipendio del developer è di 1500€';
      return salary
      break;

    case 'other':
      salary = 'lo stipendio degli altri è di 1000€';
      return salary
      break;
  }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);