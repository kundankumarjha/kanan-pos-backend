import Item from "../models/Item.js";

export const createItem = async (req, res, next) => {
  const newItem = new Item(req.body);

  try {
    const savedItem = await newItem.save();
    res.status(200).json(savedItem);
  } catch (err) {
    next(err);
  }
};
export const updateItem = async (req, res, next) => {
  try {
    const updatedItem = await Item.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedItem);
  } catch (err) {
    next(err);
  }
};
export const deleteItem = async (req, res, next) => {
  try {
    await Item.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id);
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};
export const getItemByKey = async (req, res, next) => {
  try {
    const item = await Item.find({"itemKey":req.params.key});
    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
};
export const getItems = async (req, res, next) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (err) {
    next(err);
  }
};