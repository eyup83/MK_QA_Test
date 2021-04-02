//const data = require("./testdata.js");
Feature('MK_test');

Scenario('fill MK form', ({ I }) => {
    I.amOnPage('');
    I.wait(2);
    I.see("Personal Information")
    
    I.fillField("//input[@id='personalAmountCreditRequested']", "5000");
    I.fillField("//input[@id='firstName']", "Eyup");
    I.fillField("//input[@id='lastName']", "Magbool");
    I.fillField("//input[@id='address1']", "1802 India Street");
    I.fillField("//input[@id='postalCode']", "92101");
    I.fillField("//input[@id='city']", "San Diego");
    I.fillField("//select[@id='state']", "CA");
    I.fillField("//input[@id='addressYears']", "4");
    I.fillField("//input[@id='addressMonths']", "3");
    I.click("//span[contains(text(),'Next')]");
    I.wait(1);
    I.fillField("//input[@id='birthDate']", "06/26/1983");
    I.fillField("//input[@id='socialSecurityNumber']", "609390866");

    I.fillField('//*[@class="MuiInputBase-input MuiOutlinedInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"]', "United States");
    
    I.fillField('//*[@class="MuiSelect-root MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input"]', "U.S. Driver's License");
    
    I.selectOption("//*[@class='MuiSelect-root MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input']", "California");
    
    I.fillField("//input[@id='idValue']", "12345");
    I.fillField("//input[@id='issueDate']", "01/01/2010");
    I.fillField("//input[@id='expireDate']", "01/01/2025");
    I.click("//span[contains(text(),'Next')]");
    I.wait(1);
   
    I.fillField("//*[@class='MuiInputBase-input MuiOutlinedInput-input']", "6194905026");
    
    I.selectOption('//select[@class="MuiSelect-root MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input"]', "Mobile");
    
    I.fillField('//*[@class="MuiInputBase-input MuiOutlinedInput-input"]', "eyup83@gmail.com");
    
    I.fillField("//*[@class='MuiInputBase-input MuiOutlinedInput-input']", "eyup83@gmail.com");
    
    I.click("//span[contains(text(),'Next')]");
   
    I.selectOption("//*[@class='MuiSelect-root MuiSelect-select MuiSelect-outlined MuiInputBase-input MuiOutlinedInput-input']", "Rent");
   
    I.fillField("//*[@text='Housing Payment Monthly')]", "1500"); 
    
    I.fillField("//input[@id='occupation']", "Cashier");
    I.fillField("//select[@id='employments[0].employmentStatusEnumId", "Not employed");
    I.fillField("//input[@id='employments[0].years", "1");
    I.fillField("//input[@id='employments[0].months", "1");
    I.click("//body/div[@id='root']/div[1]/div[1]/div[2]/form[1]/div[2]/div[7]/label[1]/span[1]/span[1]/input[1]");
    I.click("//span[contains(text(),'Add a Co-Applicant')]");
    I.selectOption("//select[@id='coApplicant.relationToPrimaryApplicant']", "Spouse");
    I.fillField("//input[@id='coApplicant.firstName']", "Jenny");
    I.fillField("//input[@id='coApplicant.lastName']", "Magbool");
    I.fillField("//input[@id='coApplicant.addressYears']", "3");
    I.fillField("//input[@id='coApplicant.addressMonths']", "4");
    I.click("//span[contains(text(),'Next')]");
    I.wait(1);
    I.see("Co-Applicant");
    I.fillField("//input[@id='coApplicant.birthDate']", "06251988");
    I.fillField("//input[@id='coApplicant.socialSecurityNumber']", "542879876");
    I.selectOption("//input[@id='mui-autocomplete-2042']", "United States");
    I.selectOption("//select[@id='coApplicant.idType']", "U.S. Driver's License");
    I.selectOption("//select[@id='coApplicant.issuedBy']", "California");
    I.fillField("//input[@id='coApplicant.idValue']", "ca939412");
    I.fillField("//input[@id='coApplicant.issueDate']", "02022018");
    I.fillField("//input[@id='coApplicant.expireDate']", "03032027");
    I.click("//span[contains(text(),'Next')]");
    I.see("Co-Applicant Contact Information");
    I.fillField("//input[@id='coApplicant.phoneNumbers[0].contactNumber", "6198765423");
    I.selectOption("//select[@id='coApplicant.phoneNumbers[0].telecomContactMechPurposeId", "Mobile");
    I.fillField("//input[@id='coApplicant.emailAddress']", "Jenny@gmail.com");
    I.fillField("//input[@id='coApplicant.verifyEmailAddress']", "Jenny@gmail.com");
    I.click("//span[contains(text(),'Next')]");
    I.wait(2);
    I.see("Co-Applicant Financial Information");
    I.selectOption("//select[@id='coApplicant.residenceStatusEnumId']", "Rent");
    I.fillField("//input[@id='coApplicant.housingPayment']", "1500");
    I.fillField("//input[@id='coApplicant.occupation']", "teacher");
    I.fillField("//select[@id='coApplicant.employments[0].employmentStatusEnumId", "Not employed");
    I.fillField("//input[@id='coApplicant.employments[0].years", "3");
    I.fillField("//input[@id='coApplicant.employments[0].months", "3");
    I.click("//body/div[@id='root']/div[1]/div[1]/div[2]/form[1]/div[2]/div[8]/label[1]/span[1]/span[1]/input[1]");
    I.click("//span[contains(text(),'Next')]");
    I.wait(2);
    I.see("Options");
    I.click("//body/div[@id='root']/div[1]/div[1]/div[2]/form[1]/div[2]/div[1]/div[2]/label[1]/span[1]/span[1]/span[2]");
    I.selectOption("//select[@id='authorizedUsers[0].relationToPrimaryApplicant", "Friend");
    I.fillField("//input[@id='authorizedUsers[0].firstName", "Ali");
    I.fillField("//input[@id='authorizedUsers[0].lastName", "huseyin");
    I.fillField("//input[@id='authorizedUsers[0].birthDate", "08081981");
    I.fillField("//input[@id='authorizedUsers[0].socialSecurityNumber", "965732344");
    I.fillField("//input[@id='authorizedUsers[0].address1", "346 state st");
    I.fillField("//input[@id='authorizedUsers[0].postalCode", "92101");
    I.fillField("//input[@id='authorizedUsers[0].city", "San diego");
    I.selectOption("//select[@id='authorizedUsers[0].state", "California");
    I.fillField("//input[@id='authorizedUsers[0].addressYears", "4");
    I.fillField("//input[@id='authorizedUsers[0].addressMonths", "3");
    I.click("//body/div[@id='root']/div[1]/div[1]/div[2]/form[1]/div[2]/div[16]/button[1]"); //add 2nd auth user
    I.selectOption("//select[@id='authorizedUsers[1].relationToPrimaryApplicant", "Friend");
    I.fillField("//input[@id='authorizedUsers[1].firstName", "john");
    I.fillField("//input[@id='authorizedUsers[1].lastName", "wick");
    I.fillField("//input[@id='authorizedUsers[1].birthDate", "05041988");
    I.fillField("//input[@id='authorizedUsers[1].socialSecurityNumber", "8087632267");
    I.fillField("//input[@id='authorizedUsers[1].address1", "100 kettner blvd");
    I.fillField("//input[@id='authorizedUsers[1].postalCode", "92101");
    I.fillField("//input[@id='authorizedUsers[1].city", "san diego");
    I.selectOption("//select[@id='authorizedUsers[1].state", "California");
    I.fillField("//input[@id='authorizedUsers[1].addressYears", "4");
    I.fillField("//input[@id='authorizedUsers[1].addressMonths", "3");
    I.click("//span[contains(text(),'Next')]");
    I.wait(2);
    I.see("Review");
    I.click("//span[contains(text(),'Next')]");
    I.wait(1);
    I.see("Agreements");
    I.click("//body/div[@id='root']/div[1]/div[1]/div[2]/form[1]/div[3]/div[1]/button[1]/span[1]");
    I.wait(1);
    I.click("//body/div[@id='root']/div[1]/div[1]/div[2]/form[1]/div[3]/div[1]/button[1]/span[1]");
    I.wait(1);
    I.click("//body/div[@id='root']/div[1]/div[1]/div[2]/form[1]/div[3]/div[1]/button[1]/span[1]");
    I.see("We appreciate your patience.");






});
