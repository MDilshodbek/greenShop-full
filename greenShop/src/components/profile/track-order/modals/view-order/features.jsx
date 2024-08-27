import { useDispatch, useSelector } from "react-redux";
import { setTrackModal } from "../../../../../redux/generic-slices/modals";
import useAxios from "../../../../../hooks/axios";
import { notification } from "antd";
import { useQueryClient } from "@tanstack/react-query";

export const useViewOrderRequest = () => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const axios = useAxios();

  const {
    trackModal: { data: redux_data },
  } = useSelector(({ modal }) => modal);

  const onCancelRequest = () => {
    dispatch(setTrackModal({ show: false, data: null }));
  };

  const onDelete = async () => {
    queryClient.setQueriesData(["track-order"], (oldData) => {
      return oldData.filter((order) => order._id !== redux_data._id);
    });

    notification.success({
      message: "Order deleted successfully",
    });

    onCancelRequest();

    await axios({
      url: "order/delete-order",
      method: "DELETE",
      data: {
        order_id: redux_data._id,
      },
    });
  };

  return { onCancelRequest, onDelete };
};
