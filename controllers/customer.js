import Customer from "../models/Customer.js";

export const createCustomer = async (req, res, next) => {
  const newCustomer = new Customer(req.body);

  try {
    const savedCustomer = await newCustomer.save();
    res.status(200).json(savedCustomer);
  } catch (err) {
    next(err);
  }
};
export const updateCustomer = async (req, res, next) => {
  try {
    const updatedCustomer = await Customer.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedCustomer);
  } catch (err) {
    next(err);
  }
};
export const deleteCustomer = async (req, res, next) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);
    res.status(200).json("Customer has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json(customer);
  } catch (err) {
    next(err);
  }
};
export const getCustomerByPhone = async (req, res, next) => {
  try {
    const customer = await Customer.find({"phone":req.params.phone});
    res.status(200).json(customer);
  } catch (err) {
    next(err);
  }
};
export const getCustomers = async (req, res, next) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    next(err);
  }
};