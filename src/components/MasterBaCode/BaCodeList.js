import React from 'react';
import CustomHeader from '../../CustomFields/CustomHeader';
import CustomFileUpload from '../../CustomFields/CustomFileUpload';
import 'tailwindcss/tailwind.css';
import { useNavigate } from 'react-router-dom';
import { Controller } from 'react-hook-form';

const BaCodeList = () => {
  const navigate = useNavigate();
  const navigateFnuc = (route) => {
    navigate(route);
  };

  return (
    <div>
      <CustomHeader
        text="Bacode List"
        endItems={[
          {
            text: 'Barcode Upload',
            onClick: () => navigateFnuc("/bacode_file_upload_form"),
          },
          {
            text: 'New Barcode',
            onClick: () => navigateFnuc("/bacode_form"),
          }
        ]}
      />
      <div className="mt-4">

            <h3 className="text-center title mb-0">Role List</h3>
            <div className="settingTable">
                <Form autoComplete="off" onSubmit={(e) => this.searchRoleList(e)}>
                    <Table className="newCustomTable">
                        <thead>
                            <tr className="search">
                                <td className="border-0 pl-0">
                                    <FormGroup className="position-relative mb-0">
                                        <Input autoComplete="off" type="text" value={this.state.searchRoleName} onChange={this.searchByRoleName} placeholder="Role" />
                                    </FormGroup>
                                </td>
                                <td className="border-0"></td>
                                <td className="border-0"></td>
                                <td className="border-0"><Select options={roleStatus} placeholder="Select Status" value={this.state.searchActiveStatus} onChange={(e) => this.checkroleStatus(e)} /></td>
                                <td className="border-0">
                                    <button className="d-none" type="submit">submit</button>
                                    <div className="d-flex flex-row align-items-center justify-content-center">
                                        <Tooltip content="Search Role">
                                            <i className="fas fa-search iconAnimate cursor" onClick={(e) => this.searchRoleList(e)}></i>
                                        </Tooltip>
                                        <Tooltip content="Clear Filter">
                                            <i className="fa fa-refresh my-2 mx-3 iconAnimate cursor" onClick={(e) => this.getRoleList('reset', 1, e)} aria-hidden="true"></i>
                                        </Tooltip>
                                        {(aclPermission.POST && aclSwitch === 'on') || aclSwitch === 'off' || (loadUserData !== undefined && loadUserData.is_super_admin) ? <Tooltip content="Add Role">
                                            <i className="fa fa-plus-square iconAnimate cursor" onClick={this.addRoleModal} aria-hidden="true"></i></Tooltip>
                                            : ''}

                                        {this.state.roleList.length > 0 && ((aclPermission.DOWNLOAD && aclSwitch === 'on') || aclSwitch === 'off' || (loadUserData !== undefined && loadUserData.is_super_admin)) ? <Tooltip content="Download" className="ml-3">
                                            <i className="fa fa-download iconAnimate cursor" onClick={() => this.downloadList()} aria-hidden="true"></i></Tooltip>
                                            : ''}
                                    </div>
                                </td>
                            </tr>

                        </thead>
                        <tbody className="boxShadow">
                            <tr className="tableHeading">
                                <td onClick={(e) => this.sortingData('role')}>Role</td>
                                <td onClick={(e) => this.sortingData('description')}>Description</td>
                                <td onClick={(e) => this.sortingData('createdAt')}>Created At</td>
                                <td onClick={(e) => this.sortingData('initial_manager_status')}>Initial Manager Status</td>
                                <td onClick={(e) => this.sortingData('final_manager_status')}>Final Manager Status</td>
                                <td onClick={(e) => this.sortingData('is_active')}>Status</td>
                                <td className="noSort">Action</td>
                            </tr>
                            {mapRoleList}

                            {roleList.length === 0 ? <tr><td className="text-center" colSpan="8">No record found</td></tr> : null}

                        </tbody>
                    </Table>
                </Form>
            </div>
            <div className="d-flex align-items-center justify-content-between mt-3">
                <span>{this.state.rolePaginationCount !== "0" ? this.state.rolePaginationCount : 0} records found</span>
                {this.state.rolePaginationCount > 10 ?
                    <Pagination>
                        {activePage !== 1 ?
                            <PaginationItem className="previousArrow">
                                <PaginationLink onClick={(e) => this.loadPage(1, e)} previous tag="button"></PaginationLink>
                            </PaginationItem>
                            : null}

                        <Paginate activePage={this.state.activePage} loadPage={(o) => this.loadPage(o.object, o.event)} totalPage={Math.ceil((this.state.rolePaginationCount) / 10)} />

                        {activePage !== rolePaginationList ?
                            <PaginationItem className="nextArrow">
                                <PaginationLink onClick={(e) => this.loadPage(rolePaginationList, e)} next tag="button"></PaginationLink>
                            </PaginationItem>
                            : null}

                    </Pagination>
                    : null}
            </div>
            </div>
      Bacode List
    </div>
  );
};

export default BaCodeList;
