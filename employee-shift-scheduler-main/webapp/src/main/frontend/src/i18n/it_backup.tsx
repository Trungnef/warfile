import { TranslationMessages } from 'react-admin';

const customItalianMessages: TranslationMessages = {
    ra: {
        action: {
          add_filter: 'Thêm bộ lọc',
          add: 'Thêm',
          back: 'Quay lại',
          bulk_actions: '%{smart_count} được chọn',
          cancel: 'Hủy bỏ',
          clear_array_input: 'Xóa danh sách',
          clear_input_value: 'Xóa giá trị đầu vào',
          clone: 'Nhân bản',
          confirm: 'Xác nhận',
          create: 'Tạo',
          create_item: 'Tạo %{item}',
          delete: 'Xóa',
          edit: 'Chỉnh sửa',
          export: 'Xuất',
          list: 'Danh sách',
          refresh: 'Làm mới',
          remove_filter: 'Xóa bộ lọc này',
          remove_all_filters: 'Xóa tất cả các bộ lọc',
          remove: 'Xóa',
          save: 'Lưu',
          search: 'Tìm kiếm',
          select_all: 'Chọn tất cả',
          select_row: 'Chọn hàng này',
          show: 'Hiển thị',
          sort: 'Sắp xếp',
          undo: 'Hoàn tác',
          unselect: 'Bỏ chọn',
          expand: 'Mở rộng',
          close: 'Đóng',
          open_menu: 'Mở menu',
          close_menu: 'Đóng menu',
          update: 'Cập nhật',
          move_up: 'Di chuyển lên',
          move_down: 'Di chuyển xuống',
          open: 'Mở',
          toggle_theme: 'Chuyển đổi giao diện',
          select_columns: 'Cột',
          update_application: 'Tải lại ứng dụng',
        },
        boolean: {
          true: 'Có',
          false: 'Không',
          null: ' ',
        },
        page: {
          create: 'Thêm %{name}',
          dashboard: 'Bảng điều khiển',
          edit: '%{name} %{id}',
          error: 'Có lỗi xảy ra',
          list: '%{name}',
          loading: 'Đang tải',
          not_found: 'Không tìm thấy',
          show: '%{name} %{id}',
          empty: 'Chưa có %{name}.',
          invite: 'Bạn có muốn thêm không?'
        },
        input: {
          file: {
            upload_several:
              'Kéo các tập tin để tải lên, hoặc nhấp để chọn.',
            upload_single: 'Kéo tập tin để tải lên, hoặc nhấp để chọn.'
          },
          image: {
            upload_several:
              'Kéo các hình ảnh để tải lên, hoặc nhấp để chọn.',
            upload_single:
              'Kéo hình ảnh để tải lên, hoặc nhấp để chọn.'
          },
          references: {
            all_missing: 'Không thể tìm thấy các tham chiếu liên quan.',
            many_missing:
              'Ít nhất một trong các tham chiếu liên quan không còn khả dụng.',
            single_missing:
              'Tham chiếu liên quan không còn khả dụng.'
          },
          password: {
            toggle_visible: 'Ẩn mật khẩu',
            toggle_hidden: 'Hiển thị mật khẩu',
          },
        },
        message: {
          about: 'Thông tin',
          are_you_sure: 'Bạn có chắc không?',
          auth_error:
              'Xảy ra lỗi khi xác thực mã thông báo.',
          bulk_delete_content:
            'Bạn có chắc chắn muốn xóa %{name} này không? |||| Bạn có chắc chắn muốn xóa %{smart_count} mục này không?',
          bulk_delete_title:
            'Xóa %{name} |||| Xóa %{smart_count} mục %{name}',
          bulk_update_content:
              'Bạn có chắc chắn muốn cập nhật %{name} này không? |||| Bạn có chắc chắn muốn cập nhật %{smart_count} mục này không?',
          bulk_update_title:
              'Cập nhật %{name} |||| Cập nhật %{smart_count} mục %{name}',
          clear_array_input: 'Bạn có chắc chắn muốn xóa toàn bộ danh sách không?',
          delete_content: 'Bạn có chắc chắn muốn xóa mục này không?',
          delete_title: 'Xóa %{name} #%{id}',
          details: 'Chi tiết',
          error:
            'Xảy ra lỗi địa phương và yêu cầu của bạn không được hoàn thành.',
          invalid_form: 'Mẫu không hợp lệ. Vui lòng kiểm tra lỗi.',
          loading: 'Trang đang tải, vui lòng chờ giây lát',
          no: 'Không',
          not_found:
            'Bạn đã nhập sai URL, hoặc nhấp vào liên kết không đúng',
          yes: 'Có',
          unsaved_changes:
            "Một số thay đổi chưa được lưu. Bạn có chắc chắn muốn bỏ qua chúng không?",
        },
        navigation: {
          no_results: 'Không tìm thấy kết quả',
          no_more_results:
            'Trang số %{page} vượt quá phạm vi. Hãy thử trang trước.',
          page_out_of_boundaries: 'Số trang %{page} vượt quá giới hạn',
          page_out_from_end: 'Hết phân trang',
          page_out_from_begin: 'Số trang phải lớn hơn 1',
          page_range_info: '%{offsetBegin}-%{offsetEnd} của %{total}',
          partial_page_range_info:
              '%{offsetBegin}-%{offsetEnd} trong số hơn %{offsetEnd}',
          current_page: 'Trang %{page}',
          page: 'Đi tới trang %{page}',
          first: 'Đi tới trang đầu',
          last: 'Đi tới trang cuối',
          page_rows_per_page: 'Hàng mỗi trang',
          next: 'Tiếp theo',
          previous: 'Trước',
          skip_nav: 'Đi tới nội dung',
        },
        sort: {
          sort_by: 'Sắp xếp theo %{field} %{order}',
          ASC: 'tăng dần',
          DESC: 'giảm dần',
        },
        auth: {
          auth_check_error: 'Cần đăng nhập để tiếp tục',
          user_menu: 'Hồ sơ',
          username: 'Tên người dùng',
          password: 'Mật khẩu',
          sign_in: 'Đăng nhập',
          sign_in_error: 'Xác thực thất bại, vui lòng thử lại.',
          logout: 'Đăng xuất'
        },
        notification: {
          updated: 'Bản ghi được cập nhật |||| %{smart_count} bản ghi được cập nhật',
          created: 'Bản ghi được tạo',
          deleted: 'Bản ghi được xóa |||| %{smart_count} bản ghi được xóa',
          bad_item: 'Bản ghi không đúng',
          item_doesnt_exist: 'Bản ghi không tồn tại',
          http_error: 'Lỗi liên lạc với máy chủ dữ liệu',
          data_provider_error:
            'Lỗi nhà cung cấp dữ liệu. Kiểm tra console để biết chi tiết.',
          i18n_error:
            'Không tìm thấy bản dịch cho ngôn ngữ được chỉ định',
          canceled: 'Hành động bị hủy',
          logged_out: 'Phiên đã hết hạn, vui lòng đăng nhập lại.',
          not_authorized: "Bạn không được phép truy cập tài nguyên này.",
          application_update_available: 'Có phiên bản mới.',
        },
        validation: {
          required: 'Trường bắt buộc',
          minLength: 'Phải dài ít nhất %{min} ký tự',
          maxLength: 'Phải dài không quá %{max} ký tự',
          minValue: 'Phải ít nhất là %{min}',
          maxValue: 'Phải không quá %{max}',
          number: 'Phải là một số',
          email: 'Phải là địa chỉ email hợp lệ',
          oneOf: 'Phải là một trong các: %{options}',
          regex: 'Phải theo định dạng (biểu thức chính quy): %{pattern}'
        },
        saved_queries: {
          label: 'Truy vấn đã lưu',
          query_name: 'Tên truy vấn',
          new_label: 'Lưu truy vấn hiện tại...',
          new_dialog_title: 'Lưu truy vấn hiện tại dưới tên',
          remove_label: 'Xóa truy vấn đã lưu',
          remove_label_with_name: 'Xóa truy vấn "%{name}"',
          remove_dialog_title: 'Xóa truy vấn đã lưu?',
          remove_message:
              'Bạn có chắc chắn muốn xóa mục này khỏi danh sách truy vấn đã lưu?',
          help: 'Lọc danh sách và lưu truy vấn này để sử dụng sau',
        },
        configurable: {
          customize: 'Tùy chỉnh',
          configureMode: 'Cấu hình trang này',
          inspector: {
              title: 'Thanh tra',
              content: 'Di chuột qua các phần tử giao diện ứng dụng để cấu hình chúng',
              reset: 'Đặt lại cài đặt',
              hideAll: 'Ẩn tất cả',
              showAll: 'Hiển thị tất cả',
          },
          Datagrid: {
              title: 'Datagrid',
              unlabeled: 'Cột không nhãn #%{column}',
          },
          SimpleForm: {
              title: 'Biểu mẫu',
              unlabeled: 'Đầu vào không nhãn #%{input}',
          },
          SimpleList: {
              title: 'Danh sách',
              primaryText: 'Văn bản chính',
              secondaryText: 'Văn bản phụ',
              tertiaryText: 'Văn bản thứ ba',
          },
        },
      },
      resources: {
        employee: {
          name: 'Nhân viên |||| Nhân viên',
          fields: {
              number: 'Số',
              active: 'Hoạt động?',
              color: 'Màu',
              name: 'Tên',
              surname: 'Họ',
              phone: 'Số điện thoại',
              email: 'Địa chỉ email',
          },
        },
        customer: {
          name: 'Khách hàng |||| Khách hàng',
          fields: {
              vat: 'Mã số thuế',
              name: 'Tên',
              email: 'Địa chỉ email',
              phone: 'Số điện thoại',
              zipcode: 'Mã bưu điện',
              city: 'Thành phố',
              website: 'Trang web',
          }
        }
    },
    ess: {
      calendar: {
        name: "Lịch",
        event: {
          error: "Có gì đó không đúng.",
          error_create: "Lỗi khi tạo sự kiện",
          success_create: "Tạo sự kiện thành công",
          error_update: "Lỗi khi cập nhật sự kiện",
          success_update: "Cập nhật sự kiện thành công",
          error_delete: "Lỗi khi xóa sự kiện",
          success_delete: "Xóa sự kiện thành công",
          recurring: {
            thisev: "Sự kiện này",
            thisandfoll: "Sự kiện này và các sự kiện trong tương lai"
          }
        },
        calendarlist: {
          number: "Số hiệu"
        },
      },
      users: {
        password_update: {
          btn_label: "Thay đổi mật khẩu",
          updated: "Đã thay đổi mật khẩu thành công!",
          updated_error: "Có lỗi khi cập nhật mật khẩu.",
          field_label: "Mật khẩu mới"
        }
      },
      summary: {
        name: "Báo cáo"
      }
    }
};

export default customItalianMessages;
