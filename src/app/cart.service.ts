import { Injectable } from '@angular/core';

import PouchDB from 'pouchdb'
export interface IFile {
    id: string;
    fileid: string;
    pin : string;
    phonenumber : string;
    employer : string;
    customername: string
}

// CAUTION: There is currently no up-to-date "Definitely Typed" set of interfaces for
// PouchDB. So, in an effort to help me learn about the PouchDB API, I'm providing a few
// tiny interfaces here so I can get a better idea of what data is available.
interface IPouchDBAllDocsResult {
    offset: number;
    total_rows: number;
    rows: IPouchDBRow[];
}

interface IPouchDBGetResult {
    _id: string;
    _rev: string;
}

interface IPouchDBPutResult {
    ok: boolean;
    id: string;
    rev: string;
}

interface IPouchDBRemoveResult {
    ok: boolean;
    id: string;
    rev: string;
}

interface IPouchDBRow {
    id: string;
    key: string;
    value: { rev: string };

    // Only included if include_docs is set to true during query.
    doc?: any;
}

interface IPouchDBGetFriendResult extends IPouchDBGetResult {
    name: string;
}



@Injectable()
export class CartService {

  private pouch: any;
  constructor() {

      this.pouch = new PouchDB(
          "PHIZA",
          {
            auto_compaction: true
          }
      );

  }

  public addFile(fileid:string,pin:string,phonenumber:string,customername:string,employer ) : Promise<string>{

    console.log(pin)
    
    var promise = this.pouch
        .put({
            _id: ( "file:" + ( new Date() ).getTime() ),
            fileid,
            pin,
            phonenumber,
            customername,
            employer
        })
        .then(
            ( result: IPouchDBPutResult ) : string => {

                return( result.id );

            }
        )
    ;

    return( promise);
  
  }

  public getFiles() : Promise<IFile[]> {

    var promise = this.pouch
        .allDocs({
            include_docs: true,

            // In PouchDB, all keys are stored in a single collection. So, in order
            // to return just the subset of "Friends" keys, we're going to query for
            // all documents that have a "friend:" key prefix. This is known as
            // "creative keying" in the CouchDB world.
            startkey: "file:",
            endKey: "file:\uffff"
        })
        .then(
            ( result: IPouchDBAllDocsResult ) : IFile[] => {

                // Convert the raw data storage into something more natural for the
                // calling context to consume.
                var friends = result.rows.map(
                    ( row: any ) : IFile => {

                        return({
                            id: row.doc._id,
                            customername: row.doc.customername,
                            fileid:  row.doc.fileid,
                            pin :  row.doc.pin,
                            phonenumber :  row.doc.phonenumber,
                            employer :  row.doc.employer

                        });

                    }
                );

                return( friends );

            }
        )
    ;

    return( promise );

}

public getOne(pin) : Promise<IFile[]> {

    var promise = this.pouch
        .allDocs({
            include_docs: true,

            // In PouchDB, all keys are stored in a single collection. So, in order
            // to return just the subset of "Friends" keys, we're going to query for
            // all documents that have a "friend:" key prefix. This is known as
            // "creative keying" in the CouchDB world.
            startkey: pin
        })
        .then(
            ( result: IPouchDBAllDocsResult ) : IFile[] => {

                // Convert the raw data storage into something more natural for the
                // calling context to consume.
                var friends = result.rows.map(
                    ( row: any ) : IFile => {

                        return({
                            id: row.doc._id,
                            customername: row.doc.customername,
                            fileid:  row.doc.fileid,
                            pin :  row.doc.pin,
                            phonenumber :  row.doc.phonenumber,
                            employer :  row.doc.employer

                        });

                    }
                );

                return( friends );

            }
        )
    ;

    return( promise );

}
  public deleteFile( id: string ) : Promise<void> {
    var promise = this.pouch
        .get( id )
        .then(
            ( doc: IPouchDBGetFriendResult ) : any => {

                return( this.pouch.remove( doc ) );

            }
        )
        .then(
            ( result: IPouchDBRemoveResult ) : void => {
                return;

            }
        )
    ;

    return( promise );

}

deleteAll(){
  var promise = this.pouch.destroy();
}

}
